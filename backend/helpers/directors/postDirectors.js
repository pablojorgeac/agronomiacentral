const Director = require('../../models/Director');

const postDirector = async (directorInfo) => {
  try {
    const newDirector = new Director({ ...directorInfo });
    await newDirector.save();
    return newDirector;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  postDirector,
};
