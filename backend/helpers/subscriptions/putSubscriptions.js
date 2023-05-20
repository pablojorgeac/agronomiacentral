const Subscription = require('../../models/Subscription');

const putSubscription = async (email) => {
  try {
    const subscription = await Subscription.findOneAndUpdate(
      { email: email },
      {
        subscribed: false,
      }
    );
    return subscription;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  putSubscription,
};
