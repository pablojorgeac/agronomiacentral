const { getAllDirectors } = require('../../helpers/directors/getDirectors');

const getDirectors = async (req, res) => {
  try {
    const directors = await getAllDirectors();
    return res.status(200).json(directors);
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  getDirectors,
};
