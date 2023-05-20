const Subscription = require('../../models/Subscription');

const postSubscription = async (email) => {
  try {
    const subscriptionExists = await Subscription.exists({ email });
    if (subscriptionExists) {
      const subscription = await Subscription.findOneAndUpdate(
        { email },
        {
          subscribed: true,
        },
        { new: true }
      );
      return subscription;
    } else {
      const newSubscription = new Subscription({
        email,
      });
      await newSubscription.save();
      return newSubscription;
    }
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  postSubscription,
};
