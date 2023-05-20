const { getAllIncomes } = require('../../helpers/incomes/getIncomes');

const getIncomes = async (req, res) => {
  try {
    const incomes = await getAllIncomes();
    return res.status(200).json(incomes);
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = { getIncomes };
