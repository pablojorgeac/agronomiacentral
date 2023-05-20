const Event = require('../../models/Event');
const DateEvent = require('../../models/DateEvent');
const Income = require('../../models/Income');

const postEvent = async ({ date, amount, ...eventInfo }) => {
  try {
    // Creates the event
    const newEvent = new Event({
      date,
      amount,
      ...eventInfo,
    });
    // Saves it in DB
    await newEvent.save();
    // Checks if an event already exists on the specified day
    const dateEvent = await DateEvent.findOne({ date });
    if (dateEvent) {
      dateEvent.events = [...dateEvent.events, newEvent._id];
      await dateEvent.save();
    } else {
      const newDate = new DateEvent({ date, events: [newEvent._id] });
      await newDate.save();
    }
    //Adds up the earn amount to keep record of the income per month

    const year = date.getFullYear();
    const month = newEvent.date.getMonth();
    const incomes = await Income.find({ year });

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

    if (incomes) {
      await Income.findOneAndUpdate(
        { year },
        {
          incomePerMonth: {
            ...incomes.incomePerMonth,
            [months[month]]:
              incomes.incomePerMonth[months[month]] + Number(amount),
          },
        }
      );
    } else {
      const newIncomeYear = new Income({
        year,
        incomePerMonth: { [months[month]]: Number(amount) },
      });
      await newIncomeYear.save();
    }

    // Returns the new Event
    return newEvent;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  postEvent,
};
