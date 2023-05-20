const Match = require('../../models/Match');

const getAllMatches = async () => {
  try {
    const allMatches = await Match.find();
    return allMatches;
  } catch (error) {
    console.error(error.message);
  }
};

const getMatchesByDiscipline = async (discipline) => {
  try {
    const matches = await Match.find({ discipline });
    return matches;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getAllMatches,
  getMatchesByDiscipline,
};
