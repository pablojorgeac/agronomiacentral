const Ad = require('../../models/Ad');

const getAllAds = async () => {
  try {
    const ads = await Ad.find();
    return ads;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getAllAds,
};
