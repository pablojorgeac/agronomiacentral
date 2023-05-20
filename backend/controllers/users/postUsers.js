const { postUser } = require('../../helpers/users/postUsers');

const createUser = async (req, res) => {
  const { ...userInfo } = req.body;
  try {
    const newUser = await postUser(userInfo);
    return res.status(201).json({
      msg: 'User Created Successfully',
      newUser,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  createUser,
};
