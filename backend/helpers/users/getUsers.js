const User = require('../../models/User');

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getAllUsers,
};
