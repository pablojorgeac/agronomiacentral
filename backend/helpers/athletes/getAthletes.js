const Athlete = require('../../models/Athlete');

const getAllAthletes = async () => {
  try {
    const allAthletes = await Athlete.find();
    return allAthletes;
  } catch (error) {
    console.error(error.message);
  }
};

const getAthletesByDiscipline = async (discipline) => {
  try {
    const athletes = await Athlete.find({ discipline });
    return athletes;
  } catch (error) {
    console.error(error.message);
  }
};

const getAthletesByName = async (name) => {
  try {
    const athletes = await Athlete.find({ name });
    return athletes;
  } catch (error) {
    console.error(error.message);
  }
};

const getAthleteById = async (id) => {
  try {
    const athlete = await Athlete.findById(id);
    return athlete;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getAllAthletes,
  getAthletesByDiscipline,
  getAthletesByName,
  getAthleteById,
};
