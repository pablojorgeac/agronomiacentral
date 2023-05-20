const { postEvent } = require('../../helpers/events/postEvents');

const createEvent = async (req, res) => {
  const { ...eventInfo } = req.body;
  try {
    const newEvent = await postEvent(eventInfo);
    return res.status(201).json({
      msg: 'Event Created Succesfully',
      newEvent,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  createEvent,
};
