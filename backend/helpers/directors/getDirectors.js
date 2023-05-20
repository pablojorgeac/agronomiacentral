const Director = require('../../models/Director');

const getAllDirectors = async () => {
  try {
    const directors = await Director.find();
    return directors;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getAllDirectors,
};
