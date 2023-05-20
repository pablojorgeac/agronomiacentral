const { deleteMatch } = require('../../helpers/matches/deleteMatches');

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const match = await deleteMatch(id);
    return res.status(200).json({
      msg: 'Match Deleted Successfully',
      match,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  deleteById,
};
