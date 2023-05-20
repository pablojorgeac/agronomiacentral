const Product = require('../../models/Product');

const getAllProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getAllProducts,
};
