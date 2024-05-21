const express = require("express");
const cors = require("cors");
const app = express();
const { db } = require("./db/db");
const userRoutes = require("./routes/userRoutes");
const transactionRoutes = require('./routes/transacations');
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const IncomeModel = require('./models/IncomeModel'); // Import the Income model
const ExpenseModel = require('./models/ExpenseModel'); // Import the Expense model
require("dotenv").config();
const PORT = process.env.PORT;

console.log('Before JSON parsing middleware');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log('After JSON parsing middleware');
console.log('Before CORS middleware');
app.use(cors());
console.log('After CORS middleware');

app.use("/api/user", userRoutes);
app.use('/api/transactions', transactionRoutes);

// Add routes for fetching income and expense data
app.get('/api/transactions/incomes', async (req, res) => {
  try {
    const incomes = await IncomeModel.find();
    res.json(incomes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.get('/api/transactions/expenses', async (req, res) => {
  try {
    const expenses = await ExpenseModel.find();
    res.json(expenses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Route to delete a transaction
app.delete('/api/transactions/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Delete the transaction from the database
    await IncomeModel.findByIdAndDelete(id);
    await ExpenseModel.findByIdAndDelete(id);

    res.json({ message: 'Transaction deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.use(notFound);
app.use(errorHandler);

db().catch((error) => console.error("Failed to connect to database:", error));

const server = () => {
  app.listen(PORT, () => {
    console.log("listening to port : ", PORT);
  });
};

server();

// const express = require("express");
// const cors = require("cors");
// const app = express();
// const { db } = require("./db/db");
// const userRoutes = require("./routes/userRoutes");
// const transactionRoutes = require('./routes/transacations'); // Import the transactions routes
// const { notFound, errorHandler } = require("./middleware/errorMiddleware");
// require("dotenv").config();
// const PORT = process.env.PORT;

// console.log('Before JSON parsing middleware');
// app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // Enable URL-encoded data parsing
// console.log('After JSON parsing middleware');
// console.log('Before CORS middleware');
// app.use(cors());
// console.log('After CORS middleware');

// app.use("/api/user", userRoutes);
// app.use('/api/transactions', transactionRoutes); // Register the transactions routes

// app.use(notFound);
// app.use(errorHandler);

// db().catch((error) => console.error("Failed to connect to database:", error));

// const server = () => {
//   app.listen(PORT, () => {
//     console.log("listening to port : ", PORT);
//   });
// };

// server();

