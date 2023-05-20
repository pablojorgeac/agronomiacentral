const { deleteAd } = require('../../helpers/ads/deleteAds');

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const ad = await deleteAd(id);
    return res.status(200).json({
      msg: 'Ad Deleted Successfully',
      ad,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  deleteById,
};
