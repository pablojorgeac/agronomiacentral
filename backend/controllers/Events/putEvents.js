const { putEvent } = require('../../helpers/events/putEvents');

const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { ...updates } = req.body;
  try {
    const event = await putEvent(id, updates);
    return res.status(200).json({
      msg: 'Event Updated Successfully',
      event,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  updateEvent,
};
