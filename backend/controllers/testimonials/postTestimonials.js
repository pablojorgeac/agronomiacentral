const {
  postTestimonial,
} = require('../../helpers/testimonials/postTestimonials');
const { uploadImage, uploadVideo } = require('../../cloudinary/uploadMedia');

const createTestimonial = async (req, res) => {
  const { ...testimonialInfo } = req.body;
  try {
    // Uploads Image to Cloudinary
    const uploadedPicture = await uploadImage(testimonialInfo.picture);

    if (testimonialInfo.video) {
      // VIDEO WAS SENT BY USER. Uploads it to Cloudinary
      const uploadedVideo = await uploadVideo(testimonialInfo.video);
      // Sends testimonial info + image url and public id, and video url and public id from cloudinary
      const newTestimonial = await postTestimonial({
        ...testimonialInfo,
        picture: {
          secure_url: uploadedPicture.secure_url,
          public_id: uploadedPicture.public_id,
        },
        video: {
          secure_url: uploadedVideo.secure_url,
          public_id: uploadedVideo.public_id,
        },
      });
      return res.status(201).json({
        msg: 'Testimonial Created Successfully',
        newTestimonial,
      });
    } else {
      // NO VIDEO WAS UPLOADED BY USER.
      // Sends testimonial info + image url and public id from cloudinary
      const newTestimonial = await postTestimonial({
        ...testimonialInfo,
        picture: {
          secure_url: uploadedPicture.secure_url,
          public_id: uploadedPicture.public_id,
        },
      });
      return res.status(201).json({
        msg: 'Testimonial Created Successfully',
        newTestimonial,
      });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  createTestimonial,
};
