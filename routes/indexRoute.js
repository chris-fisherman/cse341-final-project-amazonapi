/*****************************/
/*** REQUIRE STATEMENTS ***/
/*****************************/
/* router */
const express = require('express');
const router = express();

/*****************************/
/*** ROUTES ***/
/*****************************/
router.get('/', (req, res) => {
  res.send('Amazon API index route');
});

/*****************************/
/*** EXPORTS ***/
/*****************************/
module.exports = router;
