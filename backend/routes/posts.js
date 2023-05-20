const { Router } = require('express');
const { getPosts, getById } = require('../controllers/posts/getPosts.js');
const { createPost } = require('../controllers/posts/postPosts.js');
const { updatePost } = require('../controllers/posts/putPosts.js');
const { deleteById } = require('../controllers/posts/deletePosts.js');
const { validateJWT } = require('../middlewares/validate-jwt.js');

const router = Router();

router.get('/', getPosts);
router.get('/:id', getById);
router.post('/', validateJWT, createPost);
router.put('/:id', validateJWT, updatePost);
router.delete('/:id', validateJWT, deleteById);

module.exports = router;
