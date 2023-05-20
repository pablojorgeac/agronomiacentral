const { deleteEvent } = require('../../helpers/events/deleteEvents');

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await deleteEvent(id);
    return res.status(200).json({
      msg: 'Event Deleted Succesfully',
      event,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  deleteById,
};
