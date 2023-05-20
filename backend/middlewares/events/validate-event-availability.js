const Event = require('../../models/Event');

const validateEventAvailability = async (req, res, next) => {
  const { beg_time, end_time, date } = req.body;

  try {
    // Find event
    const user = await Event.findOne({
      beg_time,
      end_time,
      date,
    });
    if (user) {
      return res.status(400).json({
        msg: 'There is already an event at the selected time and day',
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      msg: 'Error server',
    });
  }
};

module.exports = {
  validateEventAvailability,
};
