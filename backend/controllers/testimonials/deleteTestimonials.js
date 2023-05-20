const {
  deleteTestimonial,
} = require('../../helpers/testimonials/deleteTestimonials');

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const testimonial = await deleteTestimonial(id);
    return res.status(200).json({
      msg: 'Testimonial Deleted Successfully',
      testimonial,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  deleteById,
};
