const { deleteDirector } = require('../../helpers/directors/deleteDirectors');

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const director = await deleteDirector(id);
    return res.status(200).json({
      msg: 'Director Deleted Successfully',
      director,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  deleteById,
};
