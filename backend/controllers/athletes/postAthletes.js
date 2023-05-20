const { postAthlete } = require('../../helpers/athletes/postAthletes');

const createAthlete = async (req, res) => {
  const { ...athleteInfo } = req.body;
  try {
    const newAthlete = await postAthlete(athleteInfo);
    return res.status(201).json({
      msg: 'Athlete Created Successfully',
      newAthlete,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  createAthlete,
};
