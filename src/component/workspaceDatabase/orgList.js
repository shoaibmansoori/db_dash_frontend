import React,{ useState} from 'react'
import Dropdown from '../dropdown';
import Button from '@mui/material/Button';
import PopupModal from '../popupModal';
import { Box, Typography, TextField } from '@mui/material'
import SingleDatabase from './singleDatabase';
import { createDb } from '../../api/dbApi';



export const OrgList = () => {
    
   
    const [name, setName] = useState(false)
    const [db, setDb] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

   

    
    const saveDb = async (e) => {
        e.preventDefault();
      let  orgid = "63e5f9563f3d80ad6be632e0"
         const userId = localStorage.getItem("userid");
         
         const data ={
                user_id : userId,
                name    : db,
            }
          
         const response = await createDb(orgid,data)
         console.log("response",response)
         
        setOpen(false);
      };
      
     



    return (
        <>
            <Box sx={{ my: 7 ,display :"flex"} }>
                {name ?
                    (
                        <>
                            {/* <TextField id="outlined-basic" variant="outlined" /> */}
                            <TextField sx={{ width: 12000, fontWeight: 'bold' }} defaultValue="WorkSpace1" size="small" />
                            <Typography sx={{ fontWeight: 'bold', cursor: 'pointer', margin: 1 }}>Rename</Typography>
                        </>
                    ) :
                    (
                        <>
                            <Typography onClick={() => { setName(true) }} sx={{ fontWeight: 'bold' }}>Workspace 1</Typography>
                            <Box sx={{ mt: -1 }}>
                                <Dropdown first={"Rename workspace"} second={"Delete workspace"} setName={setName} />
                            </Box>
                        </>
                    )}


            </Box>
            <Box sx={{  display:"flex"}}>

                <Box sx={{ mx: 2 }}>
                    <SingleDatabase />
                </Box>

                <Box>
                    <Button onClick={handleOpen} variant="contained">Create Db</Button>
                    <PopupModal title="create Database" open={open} setOpen={setOpen} label="Database Name" 
                    saveFunction = {saveDb}  setVariable={setDb}/>
                </Box>

            </Box>
            
        </>
    )
}
