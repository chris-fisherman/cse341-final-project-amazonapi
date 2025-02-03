require('dotenv').config();
const mongoose = require('mongoose');

const initDB = async () => {
  if (mongoose.connection.readyState) {
    console.warn('DB is already initialized!');
    return mongoose.connection;
  }

  try {
    await mongoose.connect(process.env.DB_STRING, {
      dbName: process.env.DB_NAME
    });

    console.log(`<[${mongoose.connection.name}]> DB initialized successfully.`);
    return mongoose.connection;
  } catch (error) {
    console.error('Failed to initialize DB:', error);
    throw error;
  }
}

const getDB = () => {
  if (!mongoose.connection.readyState) {
    throw new Error('DB is not initialized!');
  }

  return mongoose.connection;
}

module.exports = {
  initDB,
  getDB
}
