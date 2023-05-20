const Testimonial = require('../../models/Testimonial');

const postTestimonial = async (testimonialInfo) => {
  try {
    const newTestimonial = new Testimonial({ ...testimonialInfo });
    await newTestimonial.save();
    return newTestimonial;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  postTestimonial,
};
