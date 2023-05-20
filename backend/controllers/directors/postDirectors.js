const { postDirector } = require('../../helpers/directors/postDirectors');

const createDirector = async (req, res) => {
  const { ...directorInfo } = req.body;
  try {
    const newDirector = await postDirector(directorInfo);
    return res.status(201).json({
      msg: 'Director Created Successfully',
      newDirector,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  createDirector,
};
