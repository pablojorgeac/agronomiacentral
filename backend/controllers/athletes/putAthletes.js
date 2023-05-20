const { putAthlete } = require('../../helpers/athletes/putAthletes');

const updateAthlete = async (req, res) => {
  const { id } = req.params;
  const { ...updates } = req.body;
  try {
    const athlete = await putAthlete(id, updates);
    return res.status(202).json({
      msg: 'Athlete Updated Successfully',
      athlete,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  updateAthlete,
};
