const { getAllDateEvents } = require('../../helpers/dateEvents/getDateEvents');

const getDateEvents = async (req, res) => {
  try {
    const dateEvents = await getAllDateEvents();
    return res.status(200).json(dateEvents);
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  getDateEvents,
};
