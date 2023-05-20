const { postAd } = require('../../helpers/ads/postAds');
const { uploadImage } = require('../../cloudinary/uploadMedia');

const createAd = async (req, res) => {
  const { ...adInfo } = req.body;
  try {
    // Uploads Image to Cloudinary
    const uploadedPicture = await uploadImage(adInfo.picture);
    // Sends ad info + image url from cloudinary
    const newAd = await postAd({
      ...adInfo,
      picture: {
        secure_url: uploadedPicture.secure_url,
        public_id: uploadedPicture.public_id,
      },
    });
    return res.status(201).json({
      msg: 'Ad Created Successfully',
      newAd,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  createAd,
};
