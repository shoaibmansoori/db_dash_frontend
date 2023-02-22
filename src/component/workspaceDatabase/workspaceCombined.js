import React,{useEffect, useState} from 'react'
import  {Box} from '@mui/material'
import PopupModal from '../popupModal';
import Button from '@mui/material/Button';
import {findUserByEmail} from "../../api/userApi"
import { UserAuth } from "../../context/authContext.js"
import { createOrg } from "../../api/orgApi";
import { OrgList } from './orgList';


export default function WorkspaceCombined() {

    const {user} = UserAuth();  
    const [org, setOrg] = useState();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    useEffect(()=>{
    if(user?.email)
      getOrgAndDb();

    },[user])
    
  const saveOrgToDB = async (e) => {
      e.preventDefault();
      const userid = localStorage.getItem("userid");
      console.log("userid",userid);
      const response = await createOrg({name: org,user_id:userid})
      console.log(response);
      setOpen(false);
    };
    
    const getOrgAndDb = async()=>
    {
      // console.log(user);
      const data = await findUserByEmail(user?.email);
      localStorage.setItem("userid", data?.data?.data?._id);
      // console.log(data?.data?.data?._id);
    }

   
  return (
    <>
  <Box sx={{display:''}}>

            <Box sx={{mx:3}}>
            <Button onClick={handleOpen} variant="contained">Create Organisation</Button>
            <PopupModal title="create organisation" label="Organization Name" open={open} setOpen ={setOpen}              
            saveFunction = {saveOrgToDB}  setVariable={setOrg}/>
            </Box>
           <OrgList/>
    </Box>
           
          
   
    </>
  )
}

