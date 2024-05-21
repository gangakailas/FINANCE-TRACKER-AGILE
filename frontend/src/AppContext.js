import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types'; // Import PropTypes

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(null); // Add this line


  useEffect(() => {
    // Retrieve income and expense data from local storage on component mount
    const storedIncomes = JSON.parse(localStorage.getItem("incomes")) || [];
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setIncomes(storedIncomes);
    setExpenses(storedExpenses);
  }, []);

  useEffect(() => {
    // Store income and expense data in local storage whenever they change
    localStorage.setItem("incomes", JSON.stringify(incomes));
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [incomes, expenses]);

  return (
    <AppContext.Provider value={{ incomes, setIncomes, expenses, setExpenses,  deleteIndex, setDeleteIndex }}>
      {children}
    </AppContext.Provider>
  );
};

// Define prop-types for AppProvider
AppProvider.propTypes = {
  children: PropTypes.node.isRequired, // Specify that 'children' is a required prop
};