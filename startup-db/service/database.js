const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const mongoUser = config.userName || config.username;
const url = `mongodb+srv://${mongoUser}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const buildCollection = db.collection('build');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(credential) {
  return userCollection.findOne({ $or: [{ email: credential }, { userName: credential }] });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUserToken(user) {
  await userCollection.updateOne({ userName: user.userName }, { $set: { token: user.token } });
}

async function updateUserRemoveAuth(user) {
  await userCollection.updateOne({ userName: user.userName }, { $unset: { token: 1 } });
}

async function addBuild(build) {
  return buildCollection.insertOne(build);
}

function getBuilds() {
  const query = {};
  const options = {
    sort: { _id: 1 },
  };
  const cursor = buildCollection.find(query, options);
  return cursor.toArray();
}

function getUserBuilds(userName) {
  const query = { userName: userName };
  const options = {
    sort: { _id: 1 },
  };
  const cursor = buildCollection.find(query, options);
  return cursor.toArray();
}

function getBuild(id) {
  return buildCollection.findOne({ id: id });
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUserToken,
  updateUserRemoveAuth,
  addBuild,
  getBuilds,
  getBuild,
  getUserBuilds
};
