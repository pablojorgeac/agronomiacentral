const Product = require('../../models/Product');
const { deleteImage } = require('../../cloudinary/deleteMedia');
const { uploadImage } = require('../../cloudinary/uploadMedia');

const putProduct = async (id, updates) => {
  try {
    // IF PICTURE'S BEING CHANGED
    if (updates.picture) {
      const productInfo = await Product.findById(id);
      // Deletes old picture and uploads new one
      await deleteImage(productInfo.picture.public_id);
      const newProductPicture = await uploadImage(updates.picture);
      // Updates post
      const product = await Product.findByIdAndUpdate(
        id,
        {
          ...updates,
          picture: {
            secure_url: newProductPicture.secure_url,
            public_id: newProductPicture.public_id,
          },
        },
        { new: true }
      );
      return product;
    } else {
      // IF PICTURE'S NOT BEING CHANGED
      const product = await Product.findByIdAndUpdate(
        id,
        { ...updates },
        { new: true }
      );
      return product;
    }
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  putProduct,
};
