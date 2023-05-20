const mongoose = require('mongoose');

const athleteSchema = new mongoose.Schema({
  name: {
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
      'Centro de Entrenamiento',
      'Entrenamiento de Arqueros',
      'Escuelita de Fútbol',
    ],
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: String,
    required: true,
  },
  emergency_name: {
    type: String,
    required: true,
  },
  emergency_phone: {
    type: String,
    required: true,
  },
  emergency_email: {
    type: String,
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

athleteSchema.methods.toJSON = function () {
  const { __v, _id, ...athlete } = this.toObject();
  athlete.id = _id;
  return athlete;
};

const Athlete = mongoose.model('Athlete', athleteSchema);

module.exports = Athlete;
