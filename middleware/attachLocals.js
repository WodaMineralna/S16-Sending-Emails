module.exports = (req, res, next) => {
  res.locals.loggedIn = req.session.loggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
};
