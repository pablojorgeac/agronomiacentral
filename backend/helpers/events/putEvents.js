const Event = require('../../models/Event');
const Income = require('../../models/Income');

const putEvent = async (id, eventInfo) => {
  try {
    //Saves the value of the amount the event had
    const oldAmount = await Event.findById(id);
    //Updates the event
    const event = await Event.findByIdAndUpdate(
      id,
      { ...eventInfo },
      { new: true }
    );

    //If amount of the event was updated, it updates the total income of the corresponding month
    if (eventInfo.amount) {
      const amountDifference = oldAmount.amount - eventInfo.amount;
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

      const changeIncomes = await Income.find({ year });
      await Income.findOneAndUpdate(
        { year },
        {
          incomePerMonth: {
            ...changeIncomes.incomePerMonth,
            [months[month]]:
              changeIncomes.incomePerMonth[months[month]] - amountDifference,
          },
        }
      );
    }

    //Returns the event
    return event;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  putEvent,
};
