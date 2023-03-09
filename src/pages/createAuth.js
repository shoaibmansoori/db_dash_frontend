import React, { useState } from "react";
import AuthKeyHeader from "../component/authKeyComponents/authKeyHeader";
import Box from "@mui/material/Box";
import { Link ,useLocation} from "react-router-dom";
// import { useLocation } from "react-router-dom";
import {
  TextField,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import AuthKeyDropdown from "../component/authKeyComponents/authKeyDropdown";

export default function CreateAuth() {
  console.log('inside create auth key page')
  const location = useLocation();
//the data here will be an object since an object was
const dbId = location.state;
console.log("dbid",dbId)

  const [open, setOpen] = useState(false);

  const handleCreateClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleClose();
    }
  };

  return (
    <>
    
      <Box>
        <AuthKeyHeader />
      </Box>

      <Box
        sx={{
          mt: 4,
          ml: 1,
          mr: 1,
          border: 2,
          minHeight: 500,
        }}
      >
        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", mt: "120px" }}>
            <Typography sx={{ mr: "110px", mt: "6px" }}>Name</Typography>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              sx={{ width: "100px", mr: "1px" }}
              onKeyDown={handleKeyDown}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography sx={{ mr: "70px", mt: "55px" }}>Access</Typography>
            <Typography sx={{ mt: "35px",ml:'45px' }}>
              <AuthKeyDropdown />
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Typography sx={{ mr: "70px", mt: "30px" }}>Scope</Typography>
            <Typography sx={{ mt: "10px" ,ml:'48px'}}>
              <AuthKeyDropdown />
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: 10,
            right: 3,
            margin: 3,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box sx={{ mr: 3 }}>
              <Button variant="contained" onClick={handleCreateClick}>
                Create
              </Button>
            </Box>

            <Box>
              <Link to='/authkeypage' style={{textDecoration:'none'}}>
              <Button variant="outlined">Cancel</Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>AuthKey create</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
