const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 50 },
  amount: { type: Number, required: true, min: 0.01, maxLength: 20, trim: true },
  type: { type: String, enum: ['income', 'expense'], default: 'expense' },
//   date: { type: Date, required: true },
  purpose: { type: String, required: true, trim: true },
  remarks: { type: String, required: true, maxLength: 500, trim: true },
}, { timestamps: true });

module.exports = mongoose.model('Expense', ExpenseSchema);
