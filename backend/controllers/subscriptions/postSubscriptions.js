const {
  postSubscription,
} = require('../../helpers/subscriptions/postSubscriptions');

const createSubscription = async (req, res) => {
  const { email } = req.body;
  try {
    const newSubscription = await postSubscription(email);
    return res.status(201).json({
      msg: 'Subscription Created Successfully',
      newSubscription,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  createSubscription,
};
