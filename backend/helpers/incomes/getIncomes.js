const Income = require('../../models/Income');

const getAllIncomes = async () => {
  try {
    const incomes = await Income.find();
    return incomes;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getAllIncomes,
};
