const {
  getSubscriptions,
} = require('../../helpers/subscriptions/getSubscriptions');

const getAllSubscriptions = async (req, res) => {
  try {
    const subscriptions = await getSubscriptions();
    return res.status(200).json(subscriptions);
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  getAllSubscriptions,
};
