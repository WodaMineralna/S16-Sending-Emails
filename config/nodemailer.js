const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const required = require("../utils/requireEnvVar");

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: required("SENDGRID_API_KEY"),
    },
  })
);

module.exports = transporter;
