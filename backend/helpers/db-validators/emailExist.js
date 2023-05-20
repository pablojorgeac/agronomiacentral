const User = require('../../models/User');

const emailExist = async (email) => {
  const existEmail = await User.findOne({ email });
  if (existEmail) {
    throw new Error(`The email is already registered`);
  }
};

module.exports = {
  emailExist,
};
