const DateEvent = require('../../models/DateEvent');

const getAllDateEvents = async () => {
  try {
    const dateEvents = await DateEvent.find();
    return dateEvents;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getAllDateEvents,
};
