const Match = require('../../models/Match');

const deleteMatch = async (id) => {
  try {
    const match = await Match.deleteOne({ _id: id });
    return match;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  deleteMatch,
};
