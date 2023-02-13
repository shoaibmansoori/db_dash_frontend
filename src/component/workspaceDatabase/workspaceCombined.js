import React,{useState} from 'react'
import Dropdown from '../dropdown';
import  {Box, Typography, TextField } from '@mui/material'
import SingleDatabase from './singleDatabase';

export default function WorkspaceCombined() {

    const [name, setName] = useState(false)

  return (
    <>
    <Box sx={{display:'flex', m:5}}>
            <Box>
                  {name ? 
                  (
                    <TextField id="outlined-basic" variant="outlined" />
                  ) : 
                  (
                    <Typography sx={{fontWeight: 'bold'}}>Workspace 1</Typography>
                  )}
            </Box>

            <Box sx={{mx:1}}>
                  { name ?
                    (
                        <Typography sx={{fontWeight: 'bold',mt:2,cursor:'pointer'}}>Rename</Typography>
                    ) :
                    (    
                        <Dropdown first={"Rename workspace"} second={"Delete workspace"} setName={setName}/>
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
