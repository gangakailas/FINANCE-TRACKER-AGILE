import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from "./components/home/Home.jsx";
import { Signin } from './components/signin/Signin';
// import { Signup } from './components/signup/Signup';
import Signup from './components/signup/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
