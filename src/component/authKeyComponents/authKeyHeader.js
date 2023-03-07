import React from 'react'
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";


export default function AuthKeyHeader() {
  return (
    <>
    <Box sx={{ display: "flex", justifyContent: "center", m: 1 }}>
        <Link to='/apiDoc/db/:dbId/table/:tableName' style={{textDecoration:'none'}}>
          <Button variant="contained" color="primary" sx={{mr:1}}> APIs Documentation</Button>
        </Link>
        <Button variant="contained" color="primary" disabled>Auth Key</Button>
      </Box>
    </>
  
  )
}
