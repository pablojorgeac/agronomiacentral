const Post = require('../../models/Post');
const { deleteImage } = require('../../cloudinary/deleteMedia');
const { uploadImage } = require('../../cloudinary/uploadMedia');

const putPost = async (id, updates) => {
  try {
    // IF PICTURE'S BEING CHANGED
    if (updates.picture) {
      const postInfo = await Post.findById(id);
      // Deletes old picture and uploads new one
      await deleteImage(postInfo.picture.public_id);
      const newPostPicture = await uploadImage(updates.picture);
      // Updates post
      const post = await Post.findByIdAndUpdate(
        id,
        {
          ...updates,
          picture: {
            secure_url: newPostPicture.secure_url,
            public_id: newPostPicture.public_id,
          },
        },
        { new: true }
      );
      return post;
    } else {
      // IF PICTURE'S NOT BEING CHANGED
      const post = await Post.findByIdAndUpdate(
        id,
        { ...updates },
        { new: true }
      );
      return post;
    }
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  putPost,
};
