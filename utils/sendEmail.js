const transporter = require("../config/nodemailer");

const newError = require("../utils/newError");
const required = require("../utils/requireEnvVar");

const SENDER_EMAIL = required("SENDGRID_SENDER_EMAIL");
const TESTER_RECEIVER_EMAIL = required("SENDGRID_TESTER_RECEIVER_EMAIL");
const DEV_TESTING = required("SENDGRID_DEVELOPMENT_TESTING");

async function sendEmail(to, subject, html) {
  if (!to || !subject || !html)
    throw newError("Could not send a mail: Missing function arguments");

  const receiver = DEV_TESTING ? TESTER_RECEIVER_EMAIL : to;

  try {
    await transporter.sendMail({
      to: receiver,
      from: SENDER_EMAIL,
      subject,
      html,
    });
    console.log("Email was sent to:", receiver); // DEBUGGING
    return;
  } catch (error) {
    throw newError("An error occured while sending an email", error);
  }
}

module.exports = sendEmail;
