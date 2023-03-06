import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import Authpage from './pages/authPage';
import LandingPage from './pages/landingPage';
import { AuthContextProvider } from './context/authContext';
import "./pages/css.css"
import DbDetail from './pages/dbDetail';
import ApiDocPage from './pages/apidocPage';
import Protected from './component/protected';
import WithAuth from './component/withAuth';
import Notfoundpage from './component/notFoundPage';



function App() {

  return (
   <>
   <AuthContextProvider>
    <Routes>
      <Route exact path ="/" element ={<WithAuth><Authpage/></WithAuth>} />
      <Route exact path ="/dashboard" element ={<Protected><LandingPage/></Protected>} />
      <Route exact path="*" element={<Navigate to="/notFound" />} />
      <Route exact path="/notFound" element={<Notfoundpage/>} />
      <Route exact path ="/db/:dbId" element ={<DbDetail/>}/>
      <Route exact path ="/apiDoc/db/:dbId/table/:tableName" element ={<ApiDocPage />}/>
    </Routes>
    </AuthContextProvider>


   </>
  );
}

export default App;
