import React from "react";
import AuthKey from "../component/authKeyComponents/authKeyTable";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AuthKeyHeader from "../component/authKeyComponents/authKeyHeader";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";



export default function AuthKeyPage() {
  const location = useLocation();
//the data here will be an object since an object was
const dbId = location.state;

  return (
    <>
     <Box>
     <AuthKeyHeader/>
     </Box>

      <Box sx={{ display: "flex", justifyContent: "end", m: 1 }}>
        <Link to ='/authKeyCreate' state={dbId} style={{textDecoration:'none'}} >
        <Button variant="contained" startIcon={<AddIcon/>}>
          Create Authkey
        </Button>
        </Link>
      </Box>

      <Box sx={{ mt: 2 }}>
        <AuthKey dbId={dbId}/>
      </Box>
    </>
  );
}
