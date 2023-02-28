import React, { useState } from 'react'
import Dropdown from '../dropdown';
import Button from '@mui/material/Button';
import PopupModal from '../popupModal';
import { Box, Typography, TextField } from '@mui/material'
import SingleDatabase from './singleDatabase';
import { createDb } from '../../api/dbApi';
import PropTypes from "prop-types";
import { updateOrg,deleteOrg } from '../../api/orgApi';



export const OrgList = (props) => {
     

    const [name, setName] = useState(false)
    const [orgName,setOrgName] = useState();
    const [db, setDb] = useState(false);
    const [open, setOpen] = useState(false);
    const [orgId, setOrg] = useState()
    const handleOpen = () => setOpen(true);


    const saveDb = async (e) => {
        e.preventDefault();
         const userId = localStorage.getItem("userid");
         const data ={
                user_id : userId,
                name    : db,
            }
            setOpen(false);
        await createDb(orgId,data)

    };

     const renameWorkspace = async (orgId) =>{
           const data = {
                name  : orgName
           }
         await updateOrg(orgId,data)      
     };
  
   
   const deleteOrganization = async(orgId) => {
        console.log("handle org",orgId);
        await deleteOrg(orgId);
    }
   
    
    return (
        <>
            {Object.entries(props.alldbs).map(([orgId, dbs]) => (
                 
                 <Box key={orgId} sx={{ m: 3 }}>
                    <Box sx={{ my: 7, display: "flex" }}>
                        {name ?
                            (<>
                                <TextField sx={{ width: 120, fontWeight: 'bold' }} defaultValue={dbs[0]?.org_id?.name} 
                                  value ={ orgName}  onChange={e => setOrgName(e.target.value)  } size="small"   />
                        
                                  
                                  <Button onClick={() =>  { renameWorkspace(orgId);
                                    } } variant="contained" sx={{ width: '8rem', 
                                    backgroundColor: '#1C2833', fontSize: '12px', mx: 3, ':hover': 
                                    { bgcolor: '#273746', color: 'white', border: 0, borderColor: '#1C2833', } }}>
                                    Rename
                                  </Button>   
                              

                            </>) :
                            (<>
                                <Typography sx={{ fontWeight: 'bold' }}>{dbs[0]?.org_id?.name} </Typography>

                                <Box sx={{ mt: -1 }}>
                                    <Dropdown first={"Rename workspace"} second={"Delete workspace"} setName={setName} idToDelete={orgId} deleteFunction={deleteOrganization}/>

                                </Box>
                            </>)
                        }

                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex' }}>
                            {dbs.map((db) => (
                                <Box key={db._id} sx={{ mx: 3, display: "flex" }}>
                                    <SingleDatabase db={db} />
                                </Box>
                            ))}
                        </Box> 
                        <Box>
                            <Button onClick={(e) => { handleOpen(e); setOrg(orgId) }} variant="contained">Create Db</Button>
                            <PopupModal title="create Database" open={open} setOpen={setOpen} label="Database Name"
                                saveFunction={saveDb} setVariable={setDb} />
                        </Box>
                    </Box>
                </Box>
            ))
            }





        </>
    )
}
OrgList.propTypes = {
    alldbs: PropTypes.any,
    orgId : PropTypes.any
}