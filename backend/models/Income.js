const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  incomePerMonth: {
    Enero: {
      type: Number,
      default: 0,
    },
    Febrero: {
      type: Number,
      default: 0,
    },
    Marzo: {
      type: Number,
      default: 0,
    },
    Abril: {
      type: Number,
      default: 0,
    },
    Mayo: {
      type: Number,
      default: 0,
    },
    Junio: {
      type: Number,
      default: 0,
    },
    Julio: {
      type: Number,
      default: 0,
    },
    Agosto: {
      type: Number,
      default: 0,
    },
    Septiembre: {
      type: Number,
      default: 0,
    },
    Octubre: {
      type: Number,
      default: 0,
    },
    Noviembre: {
      type: Number,
      default: 0,
    },
    Diciembre: {
      type: Number,
      default: 0,
    },
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

const Income = mongoose.model('Income', incomeSchema);

module.exports = Income;
