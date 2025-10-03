const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");

const sessionMiddleware = require("./config/session");
const csrfProtection = require("./config/csrf");
const flash = require("./config/connect-flash");
const routes = require("./routes/index");

const attachUser = require("./middleware/attachUser");
const attachLocals = require("./middleware/attachLocals");
const errorController = require("./controllers/error");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.use(sessionMiddleware());
app.use(csrfProtection);
app.use(flash);

app.use(attachUser); // ^ attaches user found by User.findById(req.session.user._id) to req.user
app.use(attachLocals); // ^ automatically attaches res.locals.loggedIn && .csrfToken to currently rendered views

app.use(routes);

app.use(errorController.get404);
app.use(errorController.getErrorPage);

module.exports = app;
