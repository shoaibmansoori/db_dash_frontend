import React,{useState} from "react";
import AuthKeyHeader from "../component/authKeyComponents/authKeyHeader";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import {
  TextField,
  Typography,
  Button,
} from "@mui/material";
import AuthKeyDropdown from "../component/authKeyComponents/authKeyDropdown";
import AuthKeyPopup from "../component/authKeyComponents/authKeyPopup";
export default function Hello() {
 
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
 
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
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
          minHeight: 560,
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
              <Button variant="contained" onClick={handleOpen}>
                Create
              </Button>
              <AuthKeyPopup open={open}
              setOpen={setOpen}/>
            </Box>
            <Box>
              <Link to='/authkeypage' >
              <Button variant="outlined">Cancel</Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      
    </>
  );
}









