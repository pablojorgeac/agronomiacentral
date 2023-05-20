const Athlete = require('../../models/Athlete');

const putAthlete = async (id, updates) => {
  try {
    const athlete = await Athlete.findByIdAndUpdate(
      id,
      { ...updates },
      { new: true }
    );
    return athlete;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  putAthlete,
};
