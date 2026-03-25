const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const authCookieName = 'token';

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

let users = [];
let builds = [];

let apiRouter = express.Router();
app.use('/api', apiRouter);

const port = process.argv.length > 2 ? process.argv[2] : 3000;

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await findUserByCredential(req.body.email) || await findUserByCredential(req.body.userName)) {
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const user = await createUser(req.body.userName, req.body.email, req.body.password);

        setAuthCookie(res, user.token);
        res.send({ email: user.email, userName: user.userName });
    }
});

// GetAuth Login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    const credential = req.body.credential || req.body.email || req.body.userName;
    const user = await findUserByCredential(credential);
    if (user) {
        if (await bcrypt.compare (req.body.password, user.password)) {
            user.token = uuid.v4();
            setAuthCookie(res, user.token);
            res.send({ email: user.email, userName: user.userName });
            return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth Logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
};

// GetBuilds
apiRouter.get('/builds', verifyAuth, (_req, res) => {
    res.send(builds);
});

// GetBuild Retrieve a single build
apiRouter.get('/builds/:id', verifyAuth, (req, res) => {
    const build = builds.find((b) => b.id === req.params.id);
    if (build) {
        res.send(build);
    } else {
        res.status(404).send({ msg: 'Build not found' });
    }
});

// GetUserBuilds Retrieve builds for a specific user
apiRouter.get('/builds/user/:userName', verifyAuth, (req, res) => {
    const userBuilds = builds.filter((b) => b.userName === req.params.userName);
    res.send(userBuilds);
});

// PostBuild Save a new character build
apiRouter.post('/builds', verifyAuth, (req, res) => {
    const build = {
        ...req.body,
        id: uuid.v4(),
        createdAt: new Date().toISOString(),
    };
    builds.push(build);
    res.send(build);
});

// Default error handler
app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

// Helper functions

async function createUser(userName, email, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        userName: userName,
        email: email,
        password: passwordHash,
        token: uuid.v4(),
    };
    users.push(user);
    return user;
}

async function findUser(field, value) {
    if (!value) return null;

    return users.find((u) => u[field] === value);
}

async function findUserByCredential(credential) {
    if (!credential) return null;

    return users.find((user) => user.email === credential || user.userName === credential);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}