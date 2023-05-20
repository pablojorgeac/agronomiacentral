const {
  putSubscription,
} = require('../../helpers/subscriptions/putSubscriptions');

const updateSubscription = async (req, res) => {
  const { email } = req.body;
  try {
    const subscription = await putSubscription(email);
    return res.status(202).json({
      msg: 'Subscription Updated Successfully',
      subscription,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  updateSubscription,
};
