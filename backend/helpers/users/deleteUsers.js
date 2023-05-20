const User = require('../../models/User');

const deleteUser = async (id) => {
  try {
    const user = await User.deleteOne({ _id: id });
    return user;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  deleteUser,
};
