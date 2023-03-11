import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import Authpage from './pages/authPage';
import LandingPage from './pages/landingPage';
import { AuthContextProvider } from './context/authContext';
import "./pages/css.css"
import DbDetail from './pages/dbDetail';
<<<<<<< HEAD
import MainTable from './table/mainTable';
import ApiDocPage from "./pages/apidocPage"
=======
import ApiDocPage from './pages/apidocPage';
import Protected from './component/protected';
import WithAuth from './component/withAuth';
import Notfoundpage from './component/notFoundPage';
import AuthKeyPage from './pages/authKeyPage';
import CreateAuth from './pages/createAuth';




>>>>>>> 3026241893df574afa63f4177af6bf92cda3fe7e
function App() {

  return (
   <>
   <AuthContextProvider>
    <Routes>
<<<<<<< HEAD
    <Route exact path ="/" element ={<Authpage/>} />
      <Route exact path ="/dashboard" element ={<LandingPage/>} />
=======
      <Route exact path ="/" element ={<WithAuth><Authpage/></WithAuth>} />
      <Route exact path ="/dashboard" element ={<Protected><LandingPage/></Protected>} />
      <Route exact path="*" element={<Navigate to="/notFound" />} />
      <Route exact path="/notFound" element={<Notfoundpage/>} />
>>>>>>> 3026241893df574afa63f4177af6bf92cda3fe7e
      <Route exact path ="/db/:dbId" element ={<DbDetail/>}/>
      <Route exact path ="/db/:dbId/table/:tableName" element ={<DbDetail/>}/>
      <Route exact path ="/authkeypage/:id" element ={<AuthKeyPage/>}/>
      <Route exact path ="/authKeyCreate/:id" element ={<CreateAuth/>}/>
      <Route exact path ="/apiDoc/db/:dbId/table/:tableName" element ={<ApiDocPage />}/>
      <Route exact path="/table" element={<MainTable/>}/>
    </Routes>




    
    </AuthContextProvider>


   </>
  );
}

export default App;
