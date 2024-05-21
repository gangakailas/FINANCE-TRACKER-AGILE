const IncomeSchema = require("../models/IncomeModel");
const mongoose = require('mongoose');

exports.addIncome = async (req, res) => {
  const { title, amount, purpose, remarks } = req.body;

  try {
    // Check for existing income entry with the same combination
    const existingIncome = await IncomeSchema.findOne({
      title,
    //   category,
      amount,
      purpose,
      remarks,
    });

    if (existingIncome) {
      return res.status(400).json({ message: 'Income already exists' });
    }

    // Validation checks
    if (!title || !amount || !purpose || !remarks) {
      return res.status(400).json({ message: 'All fields are required!' });
    }

    if (amount <= 0 || !amount == 'number') {
      return res.status(400).json({ message: 'Amount must be positive!' });
    }

    const income = IncomeSchema({ title, amount, purpose, remarks });
    await income.save();
    res.status(200).json({ message: 'Income Added' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getIncomes = async (req, res) => {
  const { sortBy = 'createdAt', sortOrder = 'desc', limit = 10, skip = 0 } = req.query;

  try {
    const incomes = await IncomeSchema.find()
      .sort({ [sortBy]: sortOrder === 'desc' ? -1 : 1 })
      .limit(parseInt(limit))
      .skip(parseInt(skip));

    res.status(200).json(incomes);
  }catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Server Error', error: error.message });
   }
   
};

exports.deleteIncome = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: 'Invalid income id' });
  }

  IncomeSchema.findByIdAndDelete(id)
    .then((income) => {
      if (!income) {
        return res.status(404).json({ message: 'Income not found' });
      }
      res.status(200).json({ message: 'Income Deleted' });
    })
    .catch((err) => {
      res.status(500).json({ message: 'Server Error' });
    });
};


// const IncomeSchema = require("../models/IncomeModel")

// exports.addIncome = async (req, res) =>{
//     const {title, amount, category, description, date} = req.body

//     const income = IncomeSchema({
//         title,
//         amount,
//         category,
//         description,
//         date
//     })

//     try {

//         if(!title || !category || !description || !date){
//             return res.status(400).json({message: 'All fields are required!'})
//         }
//         if(amount <= 0 || !amount == 'number'){
//             return res.status(400).json({message: 'Amount must be positive!'})
//         }
//         await income.save()
//         res.status(200).json({message: 'Income Added'})
        
//     } catch (error) {
//         res.status(500).json({message: 'Server Error'})
//     }

//     console.log(income)
// }

// exports.getIncomes = async (req, res) =>{
//     try {
//         const incomes = await IncomeSchema.find().sort({createdAt: -1})
//         res.status(200).json(incomes)
//     } catch (error) {
//         res.status(500).json({message: 'Server Error'})
//     }
// }

// exports.deleteIncome = async (req, res) =>{
//     const {id} =req.params;
//     IncomeSchema.findByIdAndDelete(id)
//         .then((income)=>{
//             res.status(200).json({message: 'Income Deleted'})
//         })
//         .catch((err)=>{
//             res.status(500).json({message: 'Server Error'})
//         })
// }