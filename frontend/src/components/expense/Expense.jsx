import { useState } from "react";
import { Link } from "react-router-dom";
import "./Expense.css";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

export const Expense = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [remarks, setRemarks] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(-1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent to the server
    const expenseData = {
      title,
      amount,
      purpose,
      remarks,
    };

    try {
      // Send the data to the server-side API
      const response = await fetch("http://localhost:5000/api/transactions/add-expense", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(expenseData),
      });

      if (response.ok) {
        // Handle the successful response
        console.log("Expense data saved successfully");
        // Add the new expense data to the beginning of the expenses array
        setExpenses([expenseData, ...expenses]);
        // Reset the form fields
        setTitle("");
        setAmount("");
        setPurpose("");
        setRemarks("");
      } else {
        // Handle the error response
        console.error("Failed to save expense data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleDelete = (index) => {
    // Remove the entry from the expenses array
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);

    // Update the deleteIndex state
    setDeleteIndex(index);
  };

  return (
    <div className='in-expense'>
      <div className='exp-bar'>
        <div className='exp-Header'>
          <h1>MoneyMinder</h1>
          
          <ul className='eHeader-Menu'>
          <li><Link to="/dashboard" className="imenu-button">DASHBOARD</Link></li>
          <li className={location.pathname === '/income' ? 'dash-item active' : 'dash-item'}>
              <Link to="/income" className="imenu-button">INCOME</Link>
          </li>
          <li className="exp-item"><button className="emenu-button">EXPENSE</button></li>
          <li className={location.pathname === '/transaction' ? 'dash-item active' : 'dash-item'}>
            <Link to="/transaction" className="tmenu-button">TRANSACTIONS</Link>
          </li>
          </ul>
          
          <div className='eregister-link notifications'>
            <a href="#"><IoNotificationsOutline className="icon" /></a>
          </div>
          <div className='eregister-link settings'>
            <a href="#"><IoSettingsOutline className="icon"/></a>
          </div>
          <div className='eregister-link account'>
            <a href="#"><VscAccount className="icon"/></a>
          </div>
        </div>
      </div>

      <div className="Box">
      <div className='l-Box'>
              <div className='tot-inc'>
                <p>Total Expense</p>
                
              </div>
              <div className='tot-inc-r'> 
                <p>₹____</p> 
              </div>
          <form onSubmit={handleSubmit}>
            <div className="Title-box">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="Income-box">
              <input
                type="text"
                placeholder="Expense"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <div className="Purpose-box">
              <input
                type="text"
                placeholder="Purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                required
              />
            </div>
            <div className="Remarks-box">
              <input
                type="text"
                placeholder="Add-Remarks"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                required
              />
            </div>
            <button type="submit">Add Expense+</button>
          </form>
        </div>
        <div className="r-Box">
          {expenses.slice(0, 4).map((expense, index) => (
            <div
              key={index}
              className={`in${index + 1} ${index === deleteIndex ? "deleted" : ""}`}
            >
              <p>
                {expense.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{expense.amount}
                <span className="delete-icon" onClick={() => handleDelete(index)}>
                  🗑️
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// //import React from 'react'
// import './Expense.css';
// //import { GrNotification } from "react-icons/gr";
// import { IoNotificationsOutline } from "react-icons/io5";
// import { IoSettingsOutline } from "react-icons/io5";
// import { VscAccount } from "react-icons/vsc";


// export const Expense = () => {
//   const [title, setTitle] = useState('');
//   const [amount, setAmount] = useState('');
//   const [purpose, setPurpose] = useState('');
//   const [remarks, setRemarks] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // Prepare the data to be sent to the server
//     const expenseData = {
//       title,
//       amount,
//       purpose,
//       remarks,
//     };
  
//     try {
//       // Send the data to the server-side API
//       const response = await fetch('http://localhost:5000/api/transactions/add-expense', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(expenseData),
//       });
  
//       if (response.ok) {
//         // Handle the successful response
//         console.log('Expense data saved successfully');
//         // Reset the form fields if needed
//         setTitle('');
//         setAmount('');
//         setPurpose('');
//         setRemarks('');
//       } else {
//         // Handle the error response
//         console.error('Failed to save expense data');
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   };

//   return (
//     <div className='in-expense'>
//       <div className='exp-bar'>
//         <div className='exp-Header'>
//           <h1>MoneyMinder</h1>
          
//           <ul className='eHeader-Menu'>
//           <li><Link to="/dashboard" className="imenu-button">DASHBOARD</Link></li>
//           <li className={location.pathname === '/income' ? 'dash-item active' : 'dash-item'}>
//               <Link to="/income" className="imenu-button">INCOME</Link>
//             </li>
//             <li className="exp-item"><button className="emenu-button">EXPENSE</button></li>
//             <li className={location.pathname === '/transaction' ? 'dash-item active' : 'dash-item'}>
//               <Link to="/transaction" className="tmenu-button">TRANSACTIONS</Link>
//             </li>
//           </ul>
          
//           <div className='eregister-link notifications'>
//             <a href="#"><IoNotificationsOutline className="icon" /></a>
//           </div>
//           <div className='eregister-link settings'>
//             <a href="#"><IoSettingsOutline className="icon"/></a>
//           </div>
//           <div className='eregister-link account'>
//             <a href="#"><VscAccount className="icon"/></a>
//           </div>
//         </div>
//       </div>

//       <div className="Box">
//         <div className='l-Box'>
//           <form onSubmit={handleSubmit}>
//             {/* Input fields */}
//             <div className="Title-box">
//               <input
//                 type="text"
//                 placeholder="Title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="Income-box">
//               <input
//                 type="text"
//                 placeholder="Expense"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="Purpose-box">
//               <input
//                 type="text"
//                 placeholder="Purpose"
//                 value={purpose}
//                 onChange={(e) => setPurpose(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="Remarks-box">
//               <input
//                 type="text"
//                 placeholder="Add-Remarks"
//                 value={remarks}
//                 onChange={(e) => setRemarks(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit">Add Expense+</button>
//           </form>
//         </div>
//             <div className="r-Box">
//               <div className="in4">
//                 <p>Expense 4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount</p>
//               </div>
//               <div className="in3">
//                 <p>Expense 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount</p>
//               </div>
//               <div className="in2">
//                 <p>Expense 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount</p>
//               </div>
//               <div className="in1">
//                 <p>Expense 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount</p>
//               </div>
//             </div>
//           </div>



//     </div>
//   )
// };