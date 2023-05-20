const { response, request } = require('express');
const { serialize } = require('cookie');

const logout = async (req = request, res = response) => {
  try {
    res.cookie('authToken', null, {
      secure: true,
      sameSite: 'none',
      maxAge: 0,
    });

    return res.status(200).json({
      msg: 'Logged out Successfully',
      authToken: null,
    });
  } catch (error) {
    return res.status(401).json({
      msg: 'Invalid token',
    });
  }
};

module.exports = { logout };
