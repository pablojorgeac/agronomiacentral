const Income = require('../../models/Income');

const deleteIncome = async (id) => {
  try {
    const income = await Income.deleteOne({ _id: id });
    return income;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  deleteIncome,
};
