const Post = require('../../models/Post');

const postPost = async (postInfo) => {
  try {
    const newPost = new Post({ ...postInfo });
    await newPost.save();
    return newPost;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  postPost,
};
