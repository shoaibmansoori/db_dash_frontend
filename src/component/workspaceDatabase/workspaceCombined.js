import React,{useEffect, useState} from 'react'
import  {Box} from '@mui/material'
import PopupModal from '../popupModal';
import Button from '@mui/material/Button';
import {findUserByEmail} from "../../api/userApi"
import { UserAuth } from "../../context/authContext.js"
import { createOrg } from "../../api/orgApi";
import { OrgList } from './orgList';
import SingleDatabase from './singleDatabase';
import {Typography} from '@mui/material';

export default function WorkspaceCombined() {

    const {user} = UserAuth();  
    const [alldbs,setAllDbs] = useState([]);
    //state to display modal
    const [org, setOrg] = useState();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    useEffect(()=>{
    if(user?.email)
      getOrgAndDb();

    },[user])
    const filterDbsBasedOnOrg = async (allDbs)=>
    {
      var result = {};
      allDbs.map((item)=>{
          result[item.org_id]=result[item.org_id]?[...result[item.org_id],item]:[item]
      })
      setAllDbs(result);
      // console.log(result);
    }
    const getOrgAndDb = async()=>
    {
      console.log(user);
      const data = await findUserByEmail(user?.email);  

      console.log(data?.data?.data?.dbs);
      filterDbsBasedOnOrg(data?.data?.data?.dbs)
      // setAllDbs(data?.data?.data?.dbs); 
    }
    
  const saveOrgToDB = async (e) => {
      e.preventDefault();
      const userid = localStorage.getItem("userid");
      console.log("userid",userid);
      const response = await createOrg({name: org,user_id:userid})
      console.log(response);
      setOpen(false);
    };
    
   
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
           
          
   
            {Object.entries(alldbs).map(([orgId, dbs]) => (
        <Box key={orgId} sx={{ my: 2 }}>
          <Typography variant="h6">{`Organization ${orgId}`}</Typography>
          {dbs.map((db) => (
            <SingleDatabase name={db.name} key={db.id} />
          ))}
        </Box>
      ))}
    </>
  );
}

