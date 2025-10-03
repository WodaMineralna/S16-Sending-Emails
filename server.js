require("dotenv").config();
const app = require("./app");
const { mongoConnect } = require("./src/db/database");

// ^ setting up MongoDB connection
mongoConnect(() => {
  app.listen(3000);
});
