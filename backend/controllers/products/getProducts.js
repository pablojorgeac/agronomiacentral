const { getAllProducts } = require('../../helpers/products/getProducts');

const getProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  getProducts,
};
