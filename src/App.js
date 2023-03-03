import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Authpage from './pages/authPage';
import LandingPage from './pages/landingPage';
import { AuthContextProvider } from './context/authContext';
import "./pages/css.css"
import DbDetail from './pages/dbDetail';
import MainTable from "./table/mainTable"
function App() {

  return (
   <>
   <AuthContextProvider>
    <Routes>
      <Route exact path ="/" element ={<Authpage/>} />
      <Route exact path ="/dashboard" element ={<LandingPage/>} />
      <Route exact path ="/db/:dbId" element ={<DbDetail/>}/>
      <Route exact path= "/tables" element={<MainTable/>}/>
    </Routes>
    </AuthContextProvider>


   </>
  );
}

export default App;
