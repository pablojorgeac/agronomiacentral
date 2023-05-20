const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  home_team: {
    type: String,
    required: true,
  },
  away_team: {
    type: String,
    required: true,
  },
  discipline: {
    type: String,
    enum: [
      'Ajedrez',
      'Fútbol Infantil',
      'Futsal',
      'Futsal Femenino',
      'Taekwondo',
    ],
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

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
