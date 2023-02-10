import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Divider } from '@mui/material';
import { UserAuth } from "../context/authContext.js"
import {Link, useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { useLocation } from 'react-router-dom';




function MainNavbar() {
  
  const user = UserAuth();
  const logOut = user?.logOut;
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  
  // const location = useLocation();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleLogOut = async () => {
    try {

      await logOut();
      navigate("/")
    }
    catch (e) {
      console.log(e)
    }
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Container sx={{ bgcolor: "#212529", height : '55px'}} maxWidth="100vw">

      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems:'center', height:'50px'}} disableGutters>

        <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', width: '20%',height:'50px'}}>

          <Box sx={{display : "flex", justifyContent:'center', alignItems:"center"}}>
            <Link to="/dashboard">
              {/* <img style={{ width: "120px", height: 'auto' }}
                src={viaScoketWhiteImg}
                alt="Via Socket" />  */}
                DB Dash
                </Link>
          </Box>

         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: "white", ':hover': { color: 'black', cursor: 'pointer' } }}>

          </Box>
          

        </Box>



        <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center', height:'30px',}}>

          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar/>
            </IconButton>
          </Tooltip>

          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >

            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Ansh</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">ansh@gmail.com</Typography>
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => { handleLogOut() }}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>

          </Menu>
        </Box>

      </Toolbar>
    </Container>
  );
}
export default MainNavbar;

