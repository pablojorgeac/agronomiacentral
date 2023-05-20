const Subscription = require('../../models/Subscription');

const getSubscriptions = async () => {
  try {
    const subscriptions = await Subscription.find();
    return subscriptions;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { getSubscriptions };
