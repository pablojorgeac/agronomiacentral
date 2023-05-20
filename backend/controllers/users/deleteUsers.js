const { deleteUser } = require('../../helpers/users/deleteUsers');

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await deleteUser(id);
    return res.status(200).json({
      msg: 'User Deleted Successfully',
      user,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  deleteById,
};
