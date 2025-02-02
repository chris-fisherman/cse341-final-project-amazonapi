/*****************************/
/*** REQUIRE STATEMENTS ***/
/*****************************/
/* files */
const indexRoute = require('./routes/indexRoute');
const mongodb = require('./data/database');
/* app */
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();

/*****************************/
/*** ROUTES ***/
/*****************************/
app.use('/', indexRoute);

/*****************************/
/*** LISTEN PORT ***/
/*****************************/
mongodb.initDb((error) => {
  if (error) {
    console.log(error);
  } else {
    app.listen(port, () => {
      console.log(`Database is listening and node running on port ${port}`);
    });
  }
});
