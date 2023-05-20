const Athlete = require('../../models/Athlete');

const postAthlete = async (athleteInfo) => {
  try {
    const newAthlete = new Athlete({ ...athleteInfo });
    await newAthlete.save();
    return newAthlete;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  postAthlete,
};
