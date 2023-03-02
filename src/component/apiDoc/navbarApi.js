import { Box } from '@mui/material'
import React from 'react'
import {Button,Select,MenuItem} from "@mui/material";
import Main from './apiCrudTab/apiCrudTablist';


export default function Navbar() {
  return (
    <>
    <Box align="center">
        {/* <navbarApi/> */}
        <Box sx={{ display: 'flex', justifyContent: 'center' ,alignItems:'center'}}>
            <Button variant="contained" color="primary">APIs Documentation</Button>
            <Button variant="contained" color="primary">Auth Key</Button>
        </Box>
   </Box>
   <Box >
         <Select value={2} >
         <MenuItem value={1}>organization 1</MenuItem>
         <MenuItem value={2}>organization 2</MenuItem>
         <MenuItem value={3}>organization 3</MenuItem>
        <MenuItem value={4}>organization 4</MenuItem>
         <MenuItem value={5}>organization 5</MenuItem>
         </Select>
     </Box>
     <br></br>
     <Box >
         <Select value={2} >
         <MenuItem value={1}>Table 1</MenuItem>
         <MenuItem value={2}>Table 2</MenuItem>
         <MenuItem value={3}>Table 3</MenuItem>
        <MenuItem value={4}>Table 4</MenuItem>
         <MenuItem value={5}>Table 5</MenuItem>
         </Select>
     </Box>
     <Box>
      <Main/>
     </Box>
    
        </>
  )
}