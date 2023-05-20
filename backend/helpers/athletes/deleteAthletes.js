const Athlete = require('../../models/Athlete');

const deleteAthlete = async (id) => {
  try {
    const athlete = await Athlete.deleteOne({ _id: id });
    return athlete;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  deleteAthlete,
};
