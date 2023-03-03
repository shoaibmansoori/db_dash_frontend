import React,{useEffect, useState} from 'react'
import  {Box} from '@mui/material'
import PopupModal from '../popupModal';
import Button from '@mui/material/Button';
import {findUserByEmail} from "../../api/userApi"
import { UserAuth } from "../../context/authContext.js"
import { createOrg } from "../../api/orgApi";
import { OrgList } from './orgList';
import { PropTypes } from 'prop-types';
import DbDetails from '../../pages/dbDetail'


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
          result[item.org_id._id]=result[item.org_id._id]?[...result[item.org_id._id],item]:[item]
      })
      setAllDbs(result);  
    }
    const getOrgAndDb = async()=>
    {
      const data = await findUserByEmail(user?.email);  
      localStorage.setItem("userid",data?.data?.data?._id);
      filterDbsBasedOnOrg(data?.data?.data?.dbs)
    }
  const saveOrgToDB = async (e) => {
      e.preventDefault();
      const userid = localStorage.getItem("userid");
      await createOrg({name: org,user_id:userid})
      setOpen(false);
      await getOrgAndDb();
    };
  return (
    <>
  <Box>
         <Box sx={{display:'flex',m:3}}>
            <Button onClick={handleOpen} variant="contained">Create Organisation</Button>
            <PopupModal title="create organisation" label="Organization Name" open={open} setOpen ={setOpen}
            saveFunction = {saveOrgToDB}  setVariable={setOrg}/>
          </Box>

          <Box>
          {Object.entries(alldbs).map(([orgId, dbs]) => (
                <Box key={orgId}>
                  <OrgList orgId={orgId} dbs ={dbs} getOrgAndDbs={getOrgAndDb} /> 
                  <DbDetails orgId={orgId} dbs={dbs}/>
                   </Box>
                
            ))
            }
         
            
          </Box>
    </Box>
          
    </>
  );
}
WorkspaceCombined.propTypes = {
dbs :PropTypes.string

}