const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const { getMongoDB_URI } = require("../src/db/database");
const required = require("../utils/requireEnvVar");

const MongoDB_URI = getMongoDB_URI();

module.exports = () => {
  const store = new MongoDBStore({
    uri: MongoDB_URI,
    collection: "sessions",
  });

  return session({
    secret: required("SESSION_HASH"),
    resave: false,
    saveUninitialized: false,
    store,
    // cookie: {}
  });
};
