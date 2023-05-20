const { request, response } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../../models/User');

const register = async (req = request, res = response) => {
  try {
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });
    // Encrypt password
    const salt = bcryptjs.genSaltSync(2);
    user.password = bcryptjs.hashSync(password, salt);
    // Save in DB
    await user.save();

    return res.status(201).json({
      msg: 'User succesfull registered',
      user: { name, email, role },
    });
  } catch (error) {
    if(error.code ===11000) res.send("El email ya se encuentra registrado")

  }
};

module.exports = { register };
