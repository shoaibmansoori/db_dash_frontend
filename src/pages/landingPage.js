import React from 'react'
import { Box } from '@mui/material'
import { Container } from '@mui/system'
import MainNavbar from '../component/mainNavbar'

export default function LandingPage() {
  return (
    <Container maxWidth='true' sx={{height:'100vh'}}>
    <Box>
       <Box sx={{fontWeight:'bold' }}>
       <MainNavbar/>
       </Box>
    </Box>
    </Container>
  )
}


