import React,{useEffect, useState} from 'react'
import Dropdown from '../dropdown';
import  {Box, Typography, TextField} from '@mui/material'
import SingleDatabase from './singleDatabase';
import PopupModal from '../popupModal';
import Button from '@mui/material/Button';
import {findUserByEmail} from "../../api/userApi"
import { UserAuth } from "../../context/authContext.js"



export default function WorkspaceCombined() {

    const {user} = UserAuth();  
    const [alldbs,setAllDbs] = useState([]);
    const [name, setName] = useState(false)
    //state to display modal
    const [open, setOpen] = React.useState(false);
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
  return (
    <>
    {console.log(alldbs)}
  <Box sx={{display:'flex', my:2}}>

            <Box sx={{mx:3}}>
            <Button onClick={handleOpen} variant="contained">Create Organisation</Button>
            <PopupModal title="create organisation" open={open} setOpen ={setOpen}/>
            </Box>
            <Box sx ={{my:7 , mx: -10, display: "flex", marginLeft: -29}}>
             
                    {name ? 
                    (
                      <>
                      {/* <TextField id="outlined-basic" variant="outlined" /> */}
                      <TextField  sx={{width:120 ,fontWeight: 'bold'}} defaultValue="WorkSpace1"  size="small"/>
                      <Typography sx={{fontWeight: 'bold',cursor:'pointer', margin: 1}}>Rename</Typography>
                      </>
                    ) : 
                    (
                      <>
                      <Typography onClick={()=>{setName(true)}} sx={{fontWeight: 'bold'}}>{}</Typography>
                      <Box sx={{mt: -1}}>
                      <Dropdown  first={"Rename workspace"} second={"Delete workspace"} setName={setName}/>
                      </Box>
                      </>
                    )}
                   
  
            </Box>
    </Box>
           
            <Box sx={{display:'flex'}}>

                <Box sx={{mx:2}}>
                <SingleDatabase/>
                </Box>
                
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

