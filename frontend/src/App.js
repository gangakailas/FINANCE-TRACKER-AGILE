import { useState } from 'react';
 // Import useLocation here
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./components/home/Home.jsx";
import { Signin } from './components/signin/Signin';
import { Signup } from './components/signup/Signup';


 return (
    <MainLayout>
      <Dashboard active={active} setActive={setActive} />
      <main>
        <h1>Hello</h1>
      </main>
    </MainLayout>
 );
};

function App() {
 return (
    <AppStyled className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/transaction" element={<Transactions />} />
          <Route path="/dashboard" element={<MainContent />} />
        </Routes>
      </BrowserRouter>
    </AppStyled>
 );
}

const AppStyled = styled.div`
 height: 100vh;
 width: 1440px; /* Adjust as needed */
 margin: auto; /* Center the content */
 display: flex;
 flex-direction: column;
 overflow: hidden;
 background-repeat: no-repeat;
 background-size: cover;

 main {
    flex: 1; /* Allow the main content to grow and fill available space */
    background: white;
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto; /* Add scrollbars if content overflows */
    overflow-x: hidden; /* Hide horizontal overflow */
    &::-webkit-scrollbar {
      width: 0; /* Hide scrollbars in WebKit browsers */
    }
    
 }
`;


export default App;

