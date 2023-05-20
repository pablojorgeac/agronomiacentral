const { putDirector } = require('../../helpers/directors/putDirectors');

const updateDirector = async (req, res) => {
  const { id } = req.params;
  const { ...updates } = req.body;
  try {
    const director = await putDirector(id, updates);
    return res.status(202).json({
      msg: 'Director Updated Successfully',
      director,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  updateDirector,
};
