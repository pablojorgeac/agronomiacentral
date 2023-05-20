const Director = require('../../models/Director');

const putDirector = async (id, updates) => {
  try {
    const director = await Director.findByIdAndUpdate(
      id,
      { ...updates },
      { new: true }
    );
    return director;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  putDirector,
};
