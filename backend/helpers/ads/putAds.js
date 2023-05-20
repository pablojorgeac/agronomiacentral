const Ad = require('../../models/Ad');
const { deleteImage } = require('../../cloudinary/deleteMedia');
const { uploadImage } = require('../../cloudinary/uploadMedia');

const putAd = async (id, updates) => {
  try {
    // IF PICTURE'S BEING CHANGED
    if (updates.picture) {
      const adInfo = await Ad.findById(id);
      // Deletes old picture and uploads new one
      await deleteImage(adInfo.picture.public_id);
      const newAdPicture = await uploadImage(updates.picture);
      // Updates post
      const ad = await Ad.findByIdAndUpdate(
        id,
        {
          ...updates,
          picture: {
            secure_url: newAdPicture.secure_url,
            public_id: newAdPicture.public_id,
          },
        },
        { new: true }
      );
      return ad;
    } else {
      // IF PICTURE'S NOT BEING CHANGED
      const ad = await Ad.findByIdAndUpdate(id, { ...updates }, { new: true });
      return ad;
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  putAd,
};
