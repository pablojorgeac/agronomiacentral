const Product = require('../../models/Product');
const { deleteImage } = require('../../cloudinary/deleteMedia');

const deleteProduct = async (id) => {
  try {
    const productInfo = await Product.findById(id);
    await deleteImage(productInfo.picture.public_id);
    const product = await Product.deleteOne({ _id: id });
    return product;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { deleteProduct };
