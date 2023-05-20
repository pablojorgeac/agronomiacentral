const Match = require('../../models/Match');

const putMatch = async (id, updates) => {
  try {
    const match = await Match.findByIdAndUpdate(
      id,
      { ...updates },
      { new: true }
    );
    return match;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  putMatch,
};
