import { Link, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import "./Income.css";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { AppContext } from "../../AppContext";

export const Income = () => {
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [remarks, setRemarks] = useState("");
  const { incomes, setIncomes, deleteIndex, setDeleteIndex } =
    useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent to the server
    const incomeData = {
      title,
      amount,
      purpose,
      remarks,
    };

    try {
      // Send the data to the server-side API
      const response = await fetch(
        "http://localhost:5000/api/transactions/add-income",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(incomeData),
        }
      );

      if (response.ok) {
        // Handle the successful response
        console.log("Income data saved successfully");
        // Add the new income data to the beginning of the incomes array
        setIncomes([incomeData, ...incomes]);
        // Reset the form fields
        setTitle("");
        setAmount("");
        setPurpose("");
        setRemarks("");
      } else {
        // Handle the error response
        console.error("Failed to save income data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleDelete = (index) => {
    // Remove the entry from the incomes array
    const updatedIncomes = [...incomes];
    updatedIncomes.splice(index, 1);
    setIncomes(updatedIncomes);

    // Update the deleteIndex state
    setDeleteIndex(index);
  };

  return (
    <div className="in-income">
      <div className="inc-bar">
        <div className="inc-Header">
          <h1>MoneyMinder</h1>

          <ul className='iHeader-Menu'>
          <li><Link to="/dashboard" className="imenu-button">DASHBOARD</Link></li>

            <li className="inc-item" ><button className="imenu-button">INCOME</button></li>
            <li className={location.pathname === '/expense' ? 'dash-item active' : 'dash-item'}>
              <Link to="/expense" className="emenu-button">EXPENSE</Link>
            </li>
            <li className={location.pathname === '/transaction' ? 'dash-item active' : 'dash-item'}>
              <Link to="/transaction" className="tmenu-button">TRANSACTIONS</Link>
            </li>
          </ul>

          <div className="iregister-link notifications">
            <a href="#">
              <IoNotificationsOutline className="icon" />
            </a>
          </div>
          <div className="iregister-link settings">
            <a href="#">
              <IoSettingsOutline className="icon" />
            </a>
          </div>
          <div className="iregister-link account">
            <a href="#">
              <VscAccount className="icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="Box">
        <div className="l-Box">
          <div className="tot-inc">
            <p>Total Income</p>
          </div>
          <div className="tot-inc-r">
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
                id="incomeTitle"
                name="incomeTitle"
              />
            </div>
            <div className="Income-box">
              <input
                type="text"
                placeholder="Income"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                id="incomeAmount"
                name="incomeAmount"
              />
            </div>
            <div className="Purpose-box">
              <input
                type="text"
                placeholder="Purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                required
                id="incomePurpose"
                name="incomePurpose"
              />
            </div>
            <div className="Remarks-box">
              <input
                type="text"
                placeholder="Add-Remarks"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                required
                id="incomeRemarks"
                name="incomeRemarks"
              />
            </div>

            <button type="submit">Add Income+</button>
          </form>
        </div>

        <div className="r-Box">
          {incomes.slice(0, 4).map((income, index) => (
            <div
              key={index}
              className={`in${index + 1} ${
                index === deleteIndex ? "deleted" : ""
              }`}
            >
              <p>
                {income.title}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {income.amount}
                <span
                  className="delete-icon"
                  onClick={() => handleDelete(index)}
                >
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
// // import React,
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Income.css";
// import { IoNotificationsOutline } from "react-icons/io5";
// import { IoSettingsOutline } from "react-icons/io5";
// import { VscAccount } from "react-icons/vsc";

// export const Income = () => {
//   const [title, setTitle] = useState("");
//   const [amount, setAmount] = useState("");
//   const [purpose, setPurpose] = useState("");
//   const [remarks, setRemarks] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Prepare the data to be sent to the server
//     const incomeData = {
//       title,
//       amount,
//       purpose,
//       remarks,
//     };

//     try {
//       // Send the data to the server-side API
//       const response = await fetch("http://localhost:5000/api/transactions/add-income", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(incomeData),
//       });

//       if (response.ok) {
//         // Handle the successful response
//         console.log("Income data saved successfully");
//         // Reset the form fields if needed
//         setTitle("");
//         setAmount("");
//         setPurpose("");
//         setRemarks("");
//       } else {
//         // Handle the error response
//         console.error("Failed to save income data");
//       }
//     } catch (error) {
//       console.error("An error occurred:", error);
//     }
//   };

//   return (
//     <div className="in-income">
//       <div className="inc-bar">
//         <div className="inc-Header">
//           <h1>MoneyMinder</h1>

//           <ul className="iHeader-Menu">
//             <li>
//               <Link to="/dashboard" className="imenu-button">
//                 DASHBOARD
//               </Link>
//             </li>

//             <li className="inc-item">
//               <button className="imenu-button">INCOME</button>
//             </li>
//             <li
//               className={
//                 location.pathname === "/expense"
//                   ? "dash-item active"
//                   : "dash-item"
//               }
//             >
//               <Link to="/expense" className="emenu-button">
//                 EXPENSE
//               </Link>
//             </li>
//             <li
//               className={
//                 location.pathname === "/transaction"
//                   ? "dash-item active"
//                   : "dash-item"
//               }
//             >
//               <Link to="/transaction" className="tmenu-button">
//                 TRANSACTIONS
//               </Link>
//             </li>
//           </ul>

//           <div className="iregister-link notifications">
//             <a href="#">
//               <IoNotificationsOutline className="icon" />
//             </a>
//           </div>
//           <div className="iregister-link settings">
//             <a href="#">
//               <IoSettingsOutline className="icon" />
//             </a>
//           </div>
//           <div className="iregister-link account">
//             <a href="#">
//               <VscAccount className="icon" />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="Box">
//         <div className="l-Box">
//           <div className="tot-inc">
//             <p>Total Income</p>
//           </div>
//           <div className="tot-inc-r">
//             <p>₹____</p>
//           </div>

//           <form onSubmit={handleSubmit}>
//           <div className="Title-box">
//               <input
//                 type="text"
//                 placeholder="Title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 required
//                 id="incomeTitle" // Added id attribute
//                 name="incomeTitle" // Added name attribute
//               />
//           </div>
//           <div className="Income-box">
//               <input
//                 type="text"
//                 placeholder="Income"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 required
//                 id="incomeAmount" // Added id attribute
//                 name="incomeAmount" // Added name attribute
//               />
//           </div>
//           <div className="Purpose-box">
//               <input
//                 type="text"
//                 placeholder="Purpose"
//                 value={purpose}
//                 onChange={(e) => setPurpose(e.target.value)}
//                 required
//                 id="incomePurpose" // Added id attribute
//                 name="incomePurpose" // Added name attribute
//               />
//           </div>
//           <div className="Remarks-box">
//               <input
//                 type="text"
//                 placeholder="Add-Remarks"
//                 value={remarks}
//                 onChange={(e) => setRemarks(e.target.value)}
//                 required
//                 id="incomeRemarks" // Added id attribute
//                 name="incomeRemarks" // Added name attribute
//               />
//           </div>

//           <button type="submit">Add Income+</button>
//           </form>

//         </div>

//         <div className="r-Box">
//           <div className="in4">
//             <p>
//               Income
//               4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount
//             </p>
//           </div>
//           <div className="in3">
//             <p>
//               Income
//               3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount
//             </p>
//           </div>
//           <div className="in2">
//             <p>
//               Income
//               3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount
//             </p>
//           </div>
//           <div className="in1">
//             <p>
//               Income
//               1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
