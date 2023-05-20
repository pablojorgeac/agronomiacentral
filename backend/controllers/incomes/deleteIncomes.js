const { deleteIncome } = require('../../helpers/incomes/deleteIncomes');

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const incomes = await deleteIncome(id);
    return res.status(200).json({
      msg: 'Incomes Deleted Successfully',
      incomes,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  deleteById,
};
