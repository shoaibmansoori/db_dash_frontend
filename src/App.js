import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Authpage from './pages/authPage';
import LandingPage from './pages/landingPage';
import { AuthContextProvider } from './context/authContext';
import "./pages/css.css"
import DbDetail from './pages/dbDetail';
import ApiDocPage from './pages/apidocPage';


function App() {

  return (
   <>
   <AuthContextProvider>
    <Routes>
      <Route exact path ="/" element ={<Authpage/>} />
      <Route exact path ="/dashboard" element ={<LandingPage/>} />
      <Route exact path ="/db/:dbId" element ={<DbDetail/>}/>
      <Route exact path ="/apiDoc/db/:dbId/table/:tableName" element ={<ApiDocPage />}/>
    </Routes>
    </AuthContextProvider>


   </>
  );
}

export default App;
