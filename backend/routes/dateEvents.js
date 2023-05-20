const { Router } = require('express');
const { getDateEvents } = require('../controllers/dateEvents/getDateEvents');

const router = Router();

router.get('/', getDateEvents);

module.exports = router;
