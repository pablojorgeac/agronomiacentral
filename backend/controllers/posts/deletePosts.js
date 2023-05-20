const { deletePost } = require('../../helpers/posts/deletePosts');

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await deletePost(id);
    return res.status(200).json({
      msg: 'Post Deleted Successfully',
      post,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  deleteById,
};
