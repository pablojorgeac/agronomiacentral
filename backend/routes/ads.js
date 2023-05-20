const { Router } = require('express');
const { getAds } = require('../controllers/ads/getAds');
const { createAd } = require('../controllers/ads/postAds');
const { updateAd } = require('../controllers/ads/putAds');
const { deleteById } = require('../controllers/ads/deleteAds');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.get('/', getAds);
router.post('/', validateJWT, createAd);
router.put('/:id', validateJWT, updateAd);
router.delete('/:id', validateJWT, deleteById);

module.exports = router;
