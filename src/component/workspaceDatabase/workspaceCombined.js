import React,{useState} from 'react'
import Dropdown from '../dropdown';
import  {Box, Typography, TextField} from '@mui/material'
import SingleDatabase from './singleDatabase';
import PopupModal from '../popupModal';
import Button from '@mui/material/Button';



export default function WorkspaceCombined() {

    const [name, setName] = useState(false)

    //state to display modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
  
    
  return (
    <>
  <Box sx={{display:'flex', my:2}}>

            <Box sx={{mx:3}}>
            <Button onClick={handleOpen} variant="contained">Create Organisation</Button>
            <PopupModal title="create organisation" open={open} setOpen ={setOpen}/>
            </Box>

            <Box sx={{my:7 , mx: -10}}>
                  {name ? 
                  (
                    <TextField id="outlined-basic" variant="outlined" />
                  ) : 
                  (
                    <Typography onDoubleClick={()=>{setName(true)}} sx={{fontWeight: 'bold'}}>Workspace 1</Typography>
                  )}
            </Box>

            <Box sx={{mx:1}}>
                  { name ?
                    (
                        <Box sx={{mx:12, mt:9}}>
                        <Typography sx={{fontWeight: 'bold',cursor:'pointer'}}>Rename</Typography>
                        </Box>
                    ) :
                    (    <Box sx={{my:6, mx:10}}>
                        <Dropdown first={"Rename workspace"} second={"Delete workspace"} setName={setName}/>
                        </Box>
                    )
                }
            </Box>
    </Box>
           
            <Box sx={{display:'flex'}}>

                <Box sx={{mx:2}}>
                <SingleDatabase/>
                </Box>
                
            </Box>
   
    </>
  )
}

