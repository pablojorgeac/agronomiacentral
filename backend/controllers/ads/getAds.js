const { getAllAds } = require('../../helpers/ads/getAds');

const getAds = async (req, res) => {
  try {
    const ads = await getAllAds();
    return res.status(200).json(ads);
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  getAds,
};
