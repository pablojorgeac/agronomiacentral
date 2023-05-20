const Testimonial = require('../../models/Testimonial');
const { deleteImage, deleteVideo } = require('../../cloudinary/deleteMedia');
const { uploadImage, uploadVideo } = require('../../cloudinary/uploadMedia');

const putTestimonial = async (id, updates) => {
  try {
    // IF BOTH PICTURE AND VIDEO ARE BEING CHANGED
    if (updates.picture && updates.video) {
      const testimonialInfo = await Testimonial.findById(id);
      // Deletes old picture and video
      await deleteImage(testimonialInfo.picture.public_id);
      await deleteVideo(testimonialInfo.video.public_id);
      // Uploads new picture and video
      const newTestimonialPicture = await uploadImage(updates.picture);
      const newTestimonialVideo = await uploadVideo(updates.video);
      // Updates testimonial
      const testimonial = await Testimonial.findByIdAndUpdate(
        id,
        {
          ...updates,
          picture: {
            secure_url: newTestimonialPicture.secure_url,
            public_id: newTestimonialPicture.public_id,
          },
          video: {
            secure_url: newTestimonialVideo.secure_url,
            public_id: newTestimonialVideo.public_id,
          },
        },
        { new: true }
      );
      return testimonial;
    } else if (updates.picture) {
      // IF PICTURE'S BEEN CHANGED, BUT NOT THE VIDEO
      const testimonialInfo = await Testimonial.findById(id);
      // Deletes old picture and uploads new one
      await deleteImage(testimonialInfo.picture.public_id);
      const newTestimonialPicture = await uploadImage(updates.picture);
      // Updates testimonial
      const testimonial = await Testimonial.findByIdAndUpdate(
        id,
        {
          ...updates,
          picture: {
            secure_url: newTestimonialPicture.secure_url,
            public_id: newTestimonialPicture.public_id,
          },
        },
        { new: true }
      );
      return testimonial;
    } else if (updates.video) {
      // IF VIDEO'S BEEN CHANGED, BUT NOT THE PICTURE
      const testimonialInfo = await Testimonial.findById(id);
      // Deletes old video and uploads new one
      await deleteVideo(testimonialInfo.video.public_id);
      const newTestimonialVideo = await uploadVideo(updates.video);
      // Updates testimonial
      const testimonial = await Testimonial.findByIdAndUpdate(
        id,
        {
          ...updates,
          video: {
            secure_url: newTestimonialVideo.secure_url,
            public_id: newTestimonialVideo.public_id,
          },
        },
        { new: true }
      );
      return testimonial;
    } else {
      // IF NEITHER THE PICTURE NOR THE VIDEO WERE CHANGED
      const testimonial = await Testimonial.findByIdAndUpdate(
        id,
        {
          ...updates,
        },
        { new: true }
      );
      return testimonial;
    }
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  putTestimonial,
};
