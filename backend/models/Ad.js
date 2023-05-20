const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
  name: String,
  contact: String,
  picture: {
    secure_url: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
  },
});

const Ad = mongoose.model('Ad', adSchema);

module.exports = Ad;
