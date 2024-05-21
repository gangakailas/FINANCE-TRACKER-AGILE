import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./components/home/Home.jsx";
import { Signin } from './components/signin/Signin';
import Signup from './components/signup/Signup';
import { Dashboard } from './components/dashboard/Dashboard';
import { Income } from './components/income/Income';
import { Expense } from './components/expense/Expense';
import { Transaction } from './components/transaction/Transaction';
import { AppProvider } from "./AppContext";

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/income" element={<Income />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </AppProvider>
    </Router>
  );
}

export default App;
// import './App.css';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import {Home} from "./components/home/Home.jsx";
// import { Signin } from './components/signin/Signin';
// // import { Signup } from './components/signup/Signup';
// import Signup from './components/signup/Signup';
// import { Dashboard } from './components/dashboard/Dashboard';
// import { Income } from './components/income/Income';
// import { Expense } from './components/expense/Expense';
// import { Transaction } from './components/transaction/Transaction';


// function App() {

//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route index element={<Home/>}/>
//           <Route path="/home" element={<Home/>}/>
//           <Route path="/signin" element={<Signin/>}/>
//           <Route path="/signup" element={<Signup/>}/>
//           <Route path="/dashboard" element={<Dashboard/>}/>
//           <Route path="/income" element={<Income/>}/>
//           <Route path="/expense" element={<Expense/>}/>
//           <Route path="/transaction" element={<Transaction/>}/>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
