/*****************************/
/*** REQUIRE STATEMENTS ***/
/*****************************/
/* files */
const indexRoute = require('./routes/indexRoute');
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
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
