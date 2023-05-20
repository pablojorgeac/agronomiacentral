const mongoose = require('mongoose');

const dateEventSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  events: {
    type: Array,
    of: String,
    required: true,
  },
  createdAt: {
    type: Date,
    inmutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const DateEvent = mongoose.model('DateEvent', dateEventSchema);

module.exports = DateEvent;
