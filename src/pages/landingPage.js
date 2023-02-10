import React from 'react'
import { Box } from '@mui/material'
import { Container } from '@mui/system'
import {Typography} from '@mui/material';

export default function LandingPage() {
  return (
    <Container maxWidth='true' sx={{height:'100vh'}}>
    <Box>
       <Box sx={{fontWeight:'bold' }} clone>
       <Typography>Ansh</Typography>
       </Box>
    </Box>
    </Container>
  )
}


