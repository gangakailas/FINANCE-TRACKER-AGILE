import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from "./components/home/Home.jsx";
import { Signin } from './components/signin/Signin';
import { Signup } from './components/signup/Signup';
import { Income } from './components/income/Income';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/income" element={<Income/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
