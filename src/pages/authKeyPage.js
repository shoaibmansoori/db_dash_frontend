import React from "react";
import AuthKey from "../component/authKeyComponents/authKeyTable";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AuthKeyHeader from "../component/authKeyComponents/authKeyHeader";


export default function AuthKeyPage() {
  return (
    <>
     <Box>
     <AuthKeyHeader/>
     </Box>

      <Box sx={{ display: "flex", justifyContent: "end", m: 1 }}>
        <Button variant="contained" startIcon={<AddIcon />}>
          Create Authkey
        </Button>
      </Box>

      <Box sx={{ mt: 2 }}>
        <AuthKey />
      </Box>
    </>
  );
}
