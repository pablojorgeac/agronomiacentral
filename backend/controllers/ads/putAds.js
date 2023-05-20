const { putAd } = require('../../helpers/ads/putAds');

const updateAd = async (req, res) => {
  const { id } = req.params;
  const { ...updates } = req.body;
  try {
    const ad = await putAd(id, updates);
    return res.status(202).json({
      msg: 'Ad Updated Successfully',
      ad,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  updateAd,
};
