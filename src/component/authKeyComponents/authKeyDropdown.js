import React,{useState} from 'react'
import { Typography, Menu, MenuItem, Tooltip, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
// import PropTypes from 'prop-types';
//import { deleteDb } from '../../api/dbApi'

export default function AuthKeyDropdown() {
    
    const [anchorElUser, setAnchorElUser] = useState(null);
    // const [open, setOpen] = useState(false);
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = (e) => {
      e.stopPropagation();
      setAnchorElUser(null);
    };
    // const handleClickOpen = () => {
    
    //   setOpen(true);
    // };

     
    
  return (

    
    <>  
        <Tooltip>
            <IconButton onClick={(e)=>{

              handleOpenUserMenu(e)}}>
              <AddIcon />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center" onClick={(e) =>{e.preventDefault();
              e.stopPropagation();}}>ansh</Typography>
            </MenuItem>

            <MenuItem onClick={(e)=>{
             handleCloseUserMenu(e);}}>
              <Typography  textAlign="center" >Dube</Typography>
            </MenuItem>
          </Menu>
    </>
  )
}

AuthKeyDropdown.propTypes = {
  
};













