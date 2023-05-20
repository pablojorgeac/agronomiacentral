const { deleteAthlete } = require('../../helpers/athletes/deleteAthletes');

const deleteById = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const athlete = await deleteAthlete(id);
    return res.status(200).json({
      msg: 'Athlete Deleted Successfully',
      athlete,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  deleteById,
};
