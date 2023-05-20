const { Router } = require('express');
const { getMatches } = require('../controllers/matches/getMatches');
const { createMatch } = require('../controllers/matches/postMatches');
const { updateMatch } = require('../controllers/matches/putMatches');
const { deleteById } = require('../controllers/matches/deleteMatches');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.get('/', getMatches);
router.post('/', validateJWT, createMatch);
router.put('/:id', validateJWT, updateMatch);
router.delete('/:id', validateJWT, deleteById);

module.exports = router;
