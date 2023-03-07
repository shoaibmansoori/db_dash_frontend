import React from 'react'
import AuthKeyHeader from '../component/authKeyComponents/authKeyHeader'
import Box from '@mui/material/Box';
import { TextField, Typography,Button } from '@mui/material';
import AuthKeyDropdown from '../component/authKeyComponents/authKeyDropdown';


export default function Hello() {
  return (
    <>
    <Box>
        <AuthKeyHeader/>
    </Box>

    <Box sx={{mt:4, ml:1,mr:1, border:2, minHeight:570,display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

        <Box sx={{display:'flex', justifyContent:'center'}}>
            <Typography sx={{mt:2}}>Name</Typography>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{width:'400px',ml:5}}/>
        </Box>

        <Box sx={{display:'flex', justifyContent:'center', mt:5}}>
            <Typography sx={{mr:5}}>Access</Typography>
            <AuthKeyDropdown />
            <Typography sx={{ml:2}}>Add Access</Typography>
        </Box>

        <Box sx={{display:'flex', justifyContent:'center',  mt:5}}>
            <Typography>Scope</Typography>
            <AuthKeyDropdown />
            <Typography>Add scope</Typography>
        </Box>

        <Box sx={{display:'flex'}}> 

            <Box sx={{mr:3}}>
              <Button variant="contained"> Create</Button>
            </Box>

            <Box>
              <Button variant="outlined" >Cancel</Button>
            </Box>

      </Box>

    </Box>
    
    </>
  )
}
