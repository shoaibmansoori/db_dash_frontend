import React from 'react'
import { Button } from '@mui/material'
import {UserAuth} from '../../context/authContext'
export default function Googleauth() {
  const user = UserAuth();
  const googleSignIn = user?.googleSignIn;
  const handleGoogleSignIn = async (e)=>{
    e.preventDefault();
    await googleSignIn();
  }
  return (
    <Button
    type="outlined" variant="outlined" style={{marginTop:"10px",fontWeight:'bold'}}  sx={{border:2, borderColor:"black"}}
     onClick={(e)=>{handleGoogleSignIn(e)}}>
        googleicon
        <img style={{width : "30px", heigth :"auto"}}  alt=""/>
        <p>Google</p>
    </Button>
  )
}
