import React, { useState } from "react";
import AuthKeyHeader from "../component/authKeyComponents/authKeyHeader";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import {TextField,Typography,Button,Dialog,DialogTitle,DialogActions} from "@mui/material";
import AuthAccessDropDown from "../component/authKeyComponents/authAccessDropdown";

export default function CreateAuthKey() {
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
        sx={{mt: 4, ml: 1, mr: 1, border: 2, minHeight: 560}}>
        <Box sx={{display: "grid",justifyContent: "center"}}>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "120px" }}>
            <Typography sx={{ mr: "40px", mt: "6px" }}>Name</Typography>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              sx={{ width: "100px", mr: "200px" }}
              onKeyDown={handleKeyDown}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Typography sx={{ mr: "40px", mt: "30px" }}>Scope</Typography>
            <Box sx={{ mt: "10px" }}>
              <AuthAccessDropDown />
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography sx={{ mr: "40px", mt: "55px" }}>Access</Typography>
            <Box sx={{ mt: "35px"}}>
              <AuthAccessDropDown />
            </Box>
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
              <Link to='/authkeypage' style={{ textDecoration: 'none' }}>
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
