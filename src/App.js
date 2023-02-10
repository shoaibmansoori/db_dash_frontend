import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Authpage from './Pages/authPage';
import LandingPage from './Pages/landingPage';
import { AuthContextProvider } from './context/authContext';

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
