/****************************/
/*** REQUIRE STATEMENTS ***/
/****************************/
const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

let database;

/****************************/
/*** INIT DATABASE ***/
/****************************/
const initDb = (callback) => {
  if (database) {
    console.log('Database is already initialized!');
    return callback(null, database);
  }
  MongoClient.connect(process.env.MONGODB_URL)
    .then((client) => {
      database = client;
      callback(null, database);
    })
    .catch((err) => {
      callback(err);
    });
};

/****************************/
/*** GET DATABASE ***/
/****************************/
const getDatabase = () => {
  if (!database) {
    throw Error('Database not initialized!');
  }
  return database;
};

/****************************/
/*** EXPORTS ***/
/****************************/
module.exports = { initDb, getDatabase };
