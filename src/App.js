import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Authpage from './pages/authPage';
import LandingPage from './pages/landingPage';
import { AuthContextProvider } from './context/authContext';
import "./pages/css.css"
function App() {

  return (
   <>
   <AuthContextProvider>
    <Routes>
      <Route exact path ="/" element ={<Authpage/>} />
      <Route exact path ="/dashboard" element ={<LandingPage/>} />
    </Routes>
    </AuthContextProvider>


   </>
  );
}

export default App;
