const {
  putTestimonial,
} = require('../../helpers/testimonials/putTestimonials');

const updateTestimonial = async (req, res) => {
  const { id } = req.params;
  const { ...updates } = req.body;
  try {
    const testimonial = await putTestimonial(id, updates);
    return res.status(202).json({
      msg: 'Testimonial Updated Successfully',
      testimonial,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  updateTestimonial,
};
