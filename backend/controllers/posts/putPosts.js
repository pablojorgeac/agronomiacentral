const { putPost } = require('../../helpers/posts/putPosts');

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { ...updates } = req.body;
  try {
    const post = await putPost(id, updates);
    return res.status(202).json({
      msg: 'Post Updated Successfully',
      post,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  updatePost,
};
