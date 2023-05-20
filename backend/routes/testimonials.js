const { Router } = require('express');
const {
  getTestimonials,
  getById,
} = require('../controllers/testimonials/getTestimonials.js');
const {
  createTestimonial,
} = require('../controllers/testimonials/postTestimonials.js');
const {
  updateTestimonial,
} = require('../controllers/testimonials/putTestimonials.js');
const {
  deleteById,
} = require('../controllers/testimonials/deleteTestimonials.js');
const { validateJWT } = require('../middlewares/validate-jwt.js');

const router = Router();

router.get('/', getTestimonials);
router.get('/:id', getById);
router.post('/', validateJWT, createTestimonial);
router.put('/:id', validateJWT, updateTestimonial);
router.delete('/:id', validateJWT, deleteById);

module.exports = router;
