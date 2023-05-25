const jwt = require('jsonwebtoken');
const User = require('../models/User');

const validateJWT = async (req, res, next) => {
  console.log('validateJWT', req.headers);
  const token = req.headers.cookie?.split('authToken=')[1];
  if (!token) {
    return res.status(401).json({
      msg: 'The token is required',
    });
  }

  try {
    // Get uid of user with jwt
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY, {
      ignoreExpiration: true,
    });

    // Read the user corresponding to the uid
    const user = await User.findById(uid);
    if (!user) {
      return res.status(401).json({
        msg: 'Token is not valid - user does not exist',
      });
    }
    // check that the user is activated
    if (!user.state) {
      return res.status(400).json({
        msg: 'Token is not valid - user has been deleted',
      });
    }
    next();
  } catch (error) {
    res.status(401).json({
      msg: 'Token is not valid',
    });
  }
};

module.exports = {
  validateJWT,
};
