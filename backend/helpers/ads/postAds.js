const Ad = require('../../models/Ad');

const postAd = async (adInfo) => {
  try {
    const newAd = new Ad({ ...adInfo });
    await newAd.save();
    return newAd;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { postAd };
