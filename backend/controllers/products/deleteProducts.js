const { deleteProduct } = require('../../helpers/products/deleteProducts');

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await deleteProduct(id);
    return res.status(200).json({
      msg: 'Product Deleted Successfully',
      product,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  deleteById,
};
