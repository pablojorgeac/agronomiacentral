const { Router } = require('express');
const {
  getAllSubscriptions,
} = require('../controllers/subscriptions/getSubscriptions');
const {
  createSubscription,
} = require('../controllers/subscriptions/postSubscriptions');
const {
  updateSubscription,
} = require('../controllers/subscriptions/putSubscriptions');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.get('/', getAllSubscriptions);
router.post('/', validateJWT, createSubscription);
router.put('/:id', validateJWT, updateSubscription);

module.exports = router;
