const { Router } = require('express');
const { getProducts } = require('../controllers/products/getProducts');
const { createProduct } = require('../controllers/products/postProducts');
const { updateProduct } = require('../controllers/products/putProducts');
const { deleteById } = require('../controllers/products/deleteProducts');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.get('/', getProducts);
router.post('/', validateJWT, createProduct);
router.put('/:id', validateJWT, updateProduct);
router.delete('/:id', validateJWT, deleteById);

module.exports = router;
