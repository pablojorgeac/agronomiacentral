const { Router } = require('express');
const { getAthletes, getById } = require('../controllers/athletes/getAthletes');
const { createAthlete } = require('../controllers/athletes/postAthletes');
const { updateAthlete } = require('../controllers/athletes/putAthletes');
const { deleteById } = require('../controllers/athletes/deleteAthletes');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.get('/', validateJWT, getAthletes);
router.get('/:id', validateJWT, getById);
router.post('/', validateJWT, createAthlete);
router.put('/:id', validateJWT, updateAthlete);
router.delete('/:id', validateJWT, deleteById);

module.exports = router;
