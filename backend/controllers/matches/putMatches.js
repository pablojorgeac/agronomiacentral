const { putMatch } = require('../../helpers/matches/putMatches');

const updateMatch = async (req, res) => {
  const { id } = req.params;
  const { ...updates } = req.body;
  try {
    const match = await putMatch(id, updates);
    return res.status(202).json({
      msg: 'Match Updated Successfully',
      match,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  updateMatch,
};
