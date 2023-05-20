const Match = require('../../models/Match');

const postMatch = async (matchInfo) => {
  try {
    const newMatch = new Match({ ...matchInfo });
    await newMatch.save();
    return newMatch;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  postMatch,
};
