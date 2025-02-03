/*****************************/
/*** REQUIRE STATEMENTS ***/
/*****************************/
/* files */
const indexRoute = require('./routes/indexRoute');
const { initDB } = require('./data/database');
/* app */
const port = process.env.PORT || 8080;
const express = require('express');
const app = express();

/*****************************/
/*** ROUTES ***/
/*****************************/
app.use('/', indexRoute);

/*****************************/
/*** LISTEN PORT ***/
/*****************************/
(async () => {
  try {
    await initDB();

    app.listen(port, () => {return console.log(`-==::APP is running on ${port} port::==-`)});
  } catch (error) {
    console.error('Failed to initialize DB:', error);
  }
})();
