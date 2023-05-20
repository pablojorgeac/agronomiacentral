const {
  getAllTestimonials,
  getTestimonialsByName,
  getTestimonialById,
} = require('../../helpers/testimonials/getTestimonials.js');

const getTestimonials = async (req, res) => {
  console.log(req.headers.cookie, "esoy en testimonio")
  const { title } = req.query;
  try {
    const testimonials = title
      ? await getTestimonialsByName(title)
      : await getAllTestimonials();
      
    return res.status(200).json(testimonials);
  } catch (error) {
    return res.status(404).json(error);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const testimonial = await getTestimonialById(id);
    return res.status(200).json(testimonial);
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  getTestimonials,
  getById,
};
