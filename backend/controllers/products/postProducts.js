const { postProduct } = require('../../helpers/products/postProducts');
const { uploadImage } = require('../../cloudinary/uploadMedia');

const createProduct = async (req, res) => {
  const { ...productInfo } = req.body;
  try {
    // Uploads Image to Cloudinary
    const uploadedPicture = await uploadImage(productInfo.picture);
    // Sends product info + image url from cloudinary
    const newProduct = await postProduct({
      ...productInfo,
      picture: {
        secure_url: uploadedPicture.secure_url,
        public_id: uploadedPicture.public_id,
      },
    });
    return res.status(201).json({
      msg: 'Product Created Successfully',
      newProduct,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  createProduct,
};
