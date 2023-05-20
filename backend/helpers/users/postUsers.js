const User = require('../../models/User');

const postUser = async (userInfo) => {
  try {
    const newUser = new User({ ...userInfo });
    newUser.save();
    return newUser;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  postUser,
};
