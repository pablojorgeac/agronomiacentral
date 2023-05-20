const { postMatch } = require('../../helpers/matches/postMatches');

const createMatch = async (req, res) => {
  const { ...matchInfo } = req.body;
  try {
    const newMatch = await postMatch(matchInfo);
    return res.status(201).json({
      msg: 'Match Created Successfully',
      newMatch,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  createMatch,
};
