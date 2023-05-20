const {
  getAllAthletes,
  getAthletesByDiscipline,
  getAthletesByName,
  getAthleteById,
} = require('../../helpers/athletes/getAthletes');

const getAthletes = async (req, res) => {
  const { discipline, name } = req.query;
  try {
    if (discipline) {
      const athletes = await getAthletesByDiscipline(discipline);
      return res.status(200).json(athletes);
    } else if (name) {
      const athletes = await getAthletesByName(name);
      return res.status(200).json(athletes);
    } else {
      const allAthletes = await getAllAthletes();
      return res.status(200).json(allAthletes);
    }
  } catch (error) {
    return res.status(404).json(error);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const athlete = await getAthleteById(id);
    return res.status(200).json(athlete);
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  getAthletes,
  getById,
};
