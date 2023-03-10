import React,{useState} from "react";
import AuthKeyHeader from "../component/authKeyComponents/authKeyHeader";
import Box from "@mui/material/Box";
import { Link, useLocation } from "react-router-dom";
import {TextField,Typography,Button} from "@mui/material";
import AuthAccessDropDown from "../component/authKeyComponents/authAccessDropdown";
import AuthKeyPopup from "../component/authKeyComponents/authKeyPopup";
import AuthKeyDropdown from "../component/authKeyComponents/authKeyDropdown";
import { PropTypes } from "prop-types";
import { createAuthkey } from "../api/authkeyApi";



export default function CreateAuthKey() {

 const location = useLocation()
 const dbId = location.state;
 console.log("Creating auth key", dbId);
 console.log("Creating auth key", dbId);
 const [selected,setSelected] = useState([])
 const [scope, setScope] = useState('');
 const [name,setName] = useState('');

console.log("scope",scope)
  const adminId = localStorage.getItem("userid");
    console.log("adminId", adminId);

  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };
  

  const createAuth = async () => {
    // e.preventDefault();
    const adminId = localStorage.getItem("userid");
    const data = {
       name : name,
       scope :scope,
       access : selected
    }
    const create = await createAuthkey(dbId, adminId, data )
    console.log("adminId", create);


  }



  return (
    <>
      <Box>
        <AuthKeyHeader />
      </Box>
      <Box
        sx={{mt: 4, ml: 1, mr: 1, border: 2, minHeight: 560}}>
        <Box sx={{display: "grid",justifyContent: "center"}}>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "120px" }}>
            <Typography sx={{ mr: "100px", mt: "6px" }}>Name</Typography>
            <TextField id="standard-basic" label="Standard" variant="standard" value={name} onChange={(e) => {
                setName(e.target.value);
              }} onKeyDown={handleKeyDown}/>
          </Box>
         
         
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Typography sx={{ mr: "40px", mt: "30px" }}>Scope</Typography>
            <Box sx={{ mt: "10px" }}>
              <AuthAccessDropDown  selected={selected} setSelected={setSelected} dbId={dbId} />
            </Box>
          </Box>
         
         
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography sx={{ mr: "40px", mt: "55px" }}>Access</Typography>
            <Box sx={{ mt: "35px"}}>
              <AuthKeyDropdown scope={scope} setScope={setScope}/>
            </Box>
          </Box>
        </Box>
          <Box sx={{ display: "flex", position: "absolute", right:0, bottom: 10,mr:3}}>
            <Box sx={{m:1}}>
              <Button variant="contained" onClick={()=>{createAuth()}}>
                Create
              </Button>
              <AuthKeyPopup open={open}
              setOpen={setOpen}/>
            </Box>
            <Box sx={{m:1}}>
                    <Link to='/authkeypage' style={{ textDecoration: 'none' }}>
                      <Button variant="outlined">Cancel</Button>
                    </Link>
            </Box>
        </Box>
      </Box>
    </>
  );
}

CreateAuthKey.propTypes={
  dbId: PropTypes.string
}