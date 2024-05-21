const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  amount: {
    type: Number,
    required: true,
    trim: true,
    min: 0,
    max: 1000000000,
  },
  purpose: {
    type: String,
    required: true,
    maxLength: 200,
    trim: true,
  },
  type: {
    type: String,
    default: "income",
  },

  remarks: {
    type: String,
    required: true,
    maxLength: 200,
    trim: true,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Income', IncomeSchema);

