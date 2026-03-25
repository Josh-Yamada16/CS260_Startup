while getopts k:h:s: flag
do
    case "${flag}" in
        k) key=${OPTARG};;
        h) hostname=${OPTARG};;
        s) service=${OPTARG};;
    esac
done

if [[ -z "$key" || -z "$hostname" || -z "$service" ]]; then
    printf "\nMissing required parameter.\n"
    printf "  syntax: deployService.sh -k <pem key file> -h <hostname> -s <service>\n\n"
    exit 1
fi

printf '\n----> Deploying React bundle %s to %s with %s\n' "$service" "$hostname" "$key"

# Step 1
printf "\n----> Build the distribution package\n"
rm -rf build
mkdir build
npm install # make sure vite is installed so that we can bundle
npm run build # build the React front end
cp -rf dist build/public # move the React front end to the target distribution
cp service/*.js build # move the back end service to the target distribution
cp service/*.json build

# Step 2
printf "\n----> Clearing out previous distribution on the target\n"
ssh -T -i "$key" ubuntu@$hostname << ENDSSH
rm -rf services/${service}
mkdir -p services/${service}
ENDSSH

# Step 3
printf "\n----> Copy the distribution package to the target\n"
scp -r -i "$key" build/* ubuntu@$hostname:services/$service

# Step 4
printf "\n----> Deploy the service on the target\n"
ssh -T -i "$key" ubuntu@$hostname << ENDSSH
bash -lc '
if [ -f "\$HOME/.nvm/nvm.sh" ]; then
    . "\$HOME/.nvm/nvm.sh"
    nvm use --silent default >/dev/null 2>&1 || true
fi

npm_bin="\$(command -v npm 2>/dev/null || true)"
pm2_bin="\$(command -v pm2 2>/dev/null || true)"

if [ -z "\$npm_bin" ]; then
    for candidate in "\$HOME"/.nvm/versions/node/*/bin/npm /usr/local/bin/npm /usr/bin/npm; do
        if [ -x "\$candidate" ]; then
            npm_bin="\$candidate"
            break
        fi
    done
fi

if [ -z "\$pm2_bin" ]; then
    for candidate in "\$HOME"/.nvm/versions/node/*/bin/pm2 /usr/local/bin/pm2 /usr/bin/pm2; do
        if [ -x "\$candidate" ]; then
            pm2_bin="\$candidate"
            break
        fi
    done
fi

if [ -n "\$npm_bin" ]; then
    node_bin_dir="\$(dirname "\$npm_bin")"
    export PATH="\$node_bin_dir:\$PATH"
fi

if [ -z "\$npm_bin" ]; then
    echo "npm not found on remote host PATH"
    exit 1
fi

if [ -z "\$pm2_bin" ]; then
    echo "pm2 not found on remote host PATH"
    exit 1
fi

cd services/${service}
"\$npm_bin" install
"\$pm2_bin" restart ${service}
'
ENDSSH

# Step 5
printf "\n----> Removing local copy of the distribution package\n"
rm -rf build
rm -rf dist