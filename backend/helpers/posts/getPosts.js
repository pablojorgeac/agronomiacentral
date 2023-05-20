const Post = require('../../models/Post');

const getAllPosts = async () => {
  try {
    const allPosts = await Post.find();
    return allPosts;
  } catch (error) {
    console.error(error.message);
  }
};

const getPostsByTitle = async (title) => {
  try {
    const posts = await Post.find({ title });
    return posts;
  } catch (error) {
    console.error(error.message);
  }
};

const getPostById = async (id) => {
  try {
    const post = await Post.findById(id);
    return post;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { getAllPosts, getPostsByTitle, getPostById };
