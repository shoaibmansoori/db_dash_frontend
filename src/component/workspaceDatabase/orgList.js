import React,{ useState} from 'react'
import Dropdown from '../dropdown';
import Button from '@mui/material/Button';
import PopupModal from '../popupModal';
import { Box, Typography, TextField } from '@mui/material'
import SingleDatabase from './singleDatabase';
import { createDb } from '../../api/dbApi';
import PropTypes from "prop-types";


export const OrgList = (props) => {
     
    const [name, setName] = useState(false)
    const [db, setDb] = useState(false);
    const [open, setOpen] = useState(false);
    const [orgId , setOrg] = useState(null)
    const handleOpen = () =>  setOpen(true);


    const saveDb = async (e) => {
        e.preventDefault();
         const userId = localStorage.getItem("userid");
         
         const data ={
                user_id : userId,
                name    : db,
            }
          
          await createDb(orgId,data)
         
        setOpen(false);
      };
    return (
        <>
         {Object.entries(props.alldbs).map(([orgId,dbs]) => (
        <Box key={orgId} sx={{ my: 2 }}>
            <Box sx={{ my: 7 ,display :"flex"} }>
                {name ?
                    (<>
                            <TextField sx={{  width: 120, fontWeight: 'bold' }} defaultValue={"WorkSpace1"} size="small" />
                            <Typography sx={{ fontWeight: 'bold', cursor: 'pointer', margin: 1 }}>Rename</Typography>
                            
                        </>) :
                    (<>
                        <Typography onClick={() => { setName(true) }} sx={{ fontWeight: 'bold' }}>{orgId} </Typography>
                              
                            <Box sx={{ mt: -1 }}>
                                <Dropdown first={"Rename workspace"} second={"Delete workspace"} setName={setName} />
    
                            </Box>
                    </>)
                }
                
            </Box>
            { dbs.map((db)=>(
                          <Box  key ={db._id}sx={{ mx: 2,display:"flex" }}>
                        
                          <SingleDatabase  db ={db}/>
                      </Box>           
                 ))}
                 <Box sx={{  }}>
                <Box>
                    <Button onClick={(e)=>{handleOpen(e);setOrg(orgId)}} variant="contained">Create Db</Button>
                    <PopupModal title="create Database" open={open} setOpen={setOpen} label="Database Name" 
                   saveFunction = {saveDb}  setVariable={setDb} />
                </Box>

            </Box>
            </Box>
                ))
    }
                
            
            

            
        </>
    )
}
OrgList.propTypes = {
    alldbs : PropTypes.any
}