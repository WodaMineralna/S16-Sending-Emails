const bcrypt = require("bcryptjs");

const User = require("./user");

const newError = require("../utils/newError");
const sendMail = require("../utils/sendEmail");

async function loginUser(userData) {
  try {
    const { email, password } = userData;

    const foundUser = await User.findOne({ email });
    if (!foundUser) return false;

    const doMatch = await bcrypt.compare(password, foundUser.password);
    if (!doMatch) return false;

    return foundUser;
  } catch (error) {
    throw newError("Failed to login user", error);
  }
}

// ! VALIDATION will be implemented during course section S18 - Understanding Validation
async function singupUser(userData) {
  try {
    const { email, password, confirmPassword } = userData;
    const userExists = await User.findOne({ email });

    // ^ return will be handled in controller, calling res.redirect
    if (userExists) return true;

    const hashedPwd = await bcrypt.hash(password, 12);
    const user = new User({
      email,
      password: hashedPwd,
      cart: { items: [] },
    });

    await user.save();

    const dummyID = Math.random().toString(36).slice(2, 18);
    await sendMail(
      email,
      "Signup succeeded!",
      `<h1>You succesfully signed up!</h1><p>Dummy ID: ${dummyID}</p>`
    );
    return false; // user does not already exist
  } catch (error) {
    throw newError("Failed to signup user", error);
  }
}

module.exports = { loginUser, singupUser };
