const {
  getAllPosts,
  getPostsByTitle,
  getPostById,
} = require('../../helpers/posts/getPosts.js');

const getPosts = async (req, res) => {
  const token = req.header("cookie")
  
  const { title } = req.query;
  
  try {
    const posts = title ? await getPostsByTitle(title) : await getAllPosts();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(404).json(error);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await getPostById(id);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = { getPosts, getById };
