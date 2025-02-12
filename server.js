/*****************************/
/*** REQUIRE STATEMENTS ***/
/*****************************/
const { initDB } = require('./data/database');
const port = process.env.PORT || 8080;
const app = require('./app');

/*****************************/
/*** LISTEN PORT ***/
/*****************************/
(async () => {
  try {
    await initDB();

    app.listen(port, () => {
      return console.log(`-==::APP is running on ${port} port::==-`);
    });
  } catch (error) {
    console.error('Failed to initialize DB:', error);
  }
})();
