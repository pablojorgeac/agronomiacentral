const Ad = require('../../models/Ad');
const { deleteImage } = require('../../cloudinary/deleteMedia');

const deleteAd = async (id) => {
  try {
    const adInfo = await Ad.findById(id);
    await deleteImage(adInfo.picture.public_id);
    const ad = await Ad.deleteOne({ _id: id });
    return ad;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  deleteAd,
};
