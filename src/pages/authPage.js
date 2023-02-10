import React from 'react'
import Box from '@mui/material/Box';
// import { Link,  } from 'react-router-dom';
import { useState } from 'react';
import {UserAuth} from '../context/authContext.js'
import Googleauth from '../component/auth/googleAuth';
import Signupinput from '../component/auth/signupInput';
import Logininput from '../component/auth/loginInput';
export default function Authpage() {
    
  const [islogin, setislogin] = useState(true)
  const usera = UserAuth();
  const signUp = usera?.signUp;
  const signIn = usera?.signIn;

 const SignuphandleSubmit = async (userdata)=>{
  const email = userdata.email;
  const password = userdata.password;
  const firstname = userdata.firstname;
  const lastname = userdata.lastname;
  
  await signUp(email,password,firstname,lastname,);
}
const LoginhandleSubmit = async (userdata)=>{
  const email = userdata.email;
  const password = userdata.password;
  await signIn(email,password);
  
}
  return (
    <Box style={{backgroundColor:"rgb(211, 211, 211,0.3)"}}  sx={{width:'98vw', height:'100%',display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
      <Box    style={{backgroundColor:"white",}}  sx={{width:'35%', height:'100%',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',boxShadow: 3, borderRadius:4}}>
        <h1>
          {islogin == false?"Create Your Account!":"Welcome Back!"}
        </h1>
        <Box>
            <Googleauth/>
        </Box> 
        <p>or</p>
        {/* condition to show login page or signup page */}
        {islogin == true ?  <Logininput LoginhandleSubmit={LoginhandleSubmit}/> : <Signupinput SignuphandleSubmit={SignuphandleSubmit}/>}
        
        {islogin == true ? <h4>No account? <span  onClick={()=>{setislogin(false)}} style={{color:"blueviolet", cursor:'pointer', textDecoration:'underline'}}>Create an account!</span> </h4> : <h4>Already a User? <span onClick={()=>{setislogin(true)}} style={{color:"blueviolet",cursor:'pointer', textDecoration:'underline'}} >Login</span> </h4>}
  
      </Box>
    </Box>
  )
}