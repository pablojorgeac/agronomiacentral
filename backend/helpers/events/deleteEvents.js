const Event = require('../../models/Event');
const DateEvent = require('../../models/DateEvent');
const Income = require('../../models/Income');

const deleteEvent = async (id) => {
  try {
    //Deletes the event
    const event = await Event.deleteOne({ _id: id });
    //Updates date availability
    await DateEvent.findOneAndUpdate(
      { events: { $in: [id] } },
      { $pull: { events: id } },
      { new: true }
    );

    //Substracts amount from total income
    const year = event.date.getFullYear();
    const month = event.date.getMonth();
    const months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];

    const changeIncomes = await Income.findOne({ year });
    await Income.findOneAndUpdate(
      { year },
      {
        incomePerMonth: {
          ...changeIncomes.incomePerMonth,
          [months[month]]:
            changeIncomes.incomePerMonth[months[month]] - event.amount,
        },
      }
    );

    //Returns the event
    return event;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  deleteEvent,
};
