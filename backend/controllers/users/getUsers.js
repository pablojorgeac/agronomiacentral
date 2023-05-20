const { getAllUsers } = require('../../helpers/users/getUsers');

const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  getUsers,
};
