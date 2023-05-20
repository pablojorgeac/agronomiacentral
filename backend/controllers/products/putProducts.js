const { putProduct } = require('../../helpers/products/putProducts');

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { ...updates } = req.body;
  try {
    const product = await putProduct(id, updates);
    return res.status(202).json({
      msg: 'Product Updated Successfully',
      product,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  updateProduct,
};
