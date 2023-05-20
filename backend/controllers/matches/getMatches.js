const {
  getAllMatches,
  getMatchesByDiscipline,
} = require('../../helpers/matches/getMatches');

const getMatches = async (req, res) => {
  const { discipline } = req.query;
  try {
    if (discipline) {
      const matches = await getMatchesByDiscipline(discipline);
      return res.status(200).json(matches);
    } else {
      const allMatches = await getAllMatches();
      return res.status(200).json(allMatches);
    }
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  getMatches,
};
