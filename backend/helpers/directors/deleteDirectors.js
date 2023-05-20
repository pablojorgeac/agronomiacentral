const Director = require('../../models/Director');

const deleteDirector = async (id) => {
  try {
    const director = await Director.deleteOne({ _id: id });
    return director;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  deleteDirector,
};
