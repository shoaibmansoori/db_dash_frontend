import React from "react";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AuthKeyHeader from "../component/authKeyComponents/authKeyHeader";
import { Link } from "react-router-dom";
import AuthKeyTable from "../component/authKeyComponents/authKeyTable";



export default function AuthKeyPage() {
  return (
    <>

     <Box>
     <AuthKeyHeader/>
     </Box>
      <Box sx={{ display: "flex", justifyContent: "end", m: 1 }}>
        <Link to ='/authkeycreate' style={{textDecoration:'none'}} >
        <Button variant="contained" startIcon={<AddIcon />}>
          Create Authkey
        </Button>
        </Link>
      </Box>

      <Box sx={{ mt: 2 }}>
        <AuthKeyTable />
      </Box>
    </>
  );
}
