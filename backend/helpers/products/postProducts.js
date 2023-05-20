const Product = require('../../models/Product');

const postProduct = async (productInfo) => {
  try {
    const newProduct = new Product({ ...productInfo });
    await newProduct.save();
    return newProduct;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  postProduct,
};
