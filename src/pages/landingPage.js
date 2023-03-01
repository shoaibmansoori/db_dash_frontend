import React, {useEffect}from 'react'
import { Box, Container} from '@mui/material'
import MainNavbar from '../component/mainNavbar'

import WorkspaceCombined from '../component/workspaceDatabase/workspaceCombined';
import "./css.css"

export default function LandingPage() {
   useEffect(() => {
     console.log("harsh testing")
   
     return () => {
       
     }
   },[])
   
  return (
    <Container maxWidth='true'>

    <Box >

       <Box>
          <MainNavbar/>
       </Box>

       <Box>
            <WorkspaceCombined/>
       </Box>

    </Box>

    </Container>
  
    )
}
