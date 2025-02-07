/*****************************/
/*** REQUIRE STATEMENTS ***/
/*****************************/
/* files */
const bodyParser = require('body-parser');
const cors = require('cors');
const { initDB } = require('./data/database');
/* app */
const port = process.env.PORT || 8080;
const express = require('express');
const app = express();

app.use(bodyParser.json())
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Z-Key, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  }
)
  .use(cors({ methods: ['GET', 'POST', 'PUT', 'DELETE'] }))
  .use(cors({ origin: '*' }));

/*****************************/
/*** ROUTES ***/
/*****************************/
app.use('/', require('./routes'));

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
