const { Router } = require('express');
const { donation } = require('../controllers/donations/postDonations');
const router = Router();

router.post('/', donation);

module.exports = router;
