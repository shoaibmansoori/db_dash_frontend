import React from 'react'
import PropTypes from 'prop-types';
import { Typography, Menu, MenuItem, Tooltip, IconButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import {deleteOrg} from '../api/orgApi.js';


export default function Dropdown(props) {

    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    // const deleteOrganization = async() => {
    //   if(func)
    //   {
    //     // e.preventDefault();
    //     console.log("delete",props?.orgId)
    //     await deleteOrg(props?.orgId);
    //       // setOpen(false);
    //   }
    // }

    


  return (
    <>
        <Tooltip>
            <IconButton onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              handleOpenUserMenu(e)}}>
              <MoreHorizIcon />
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
              e.stopPropagation();props?.setName (true)}}>{props?.first}</Typography>
            </MenuItem>
            <MenuItem onClick={(e)=>{e.preventDefault();
              e.stopPropagation();handleCloseUserMenu(e)}}>
              <Typography textAlign="center" onClick={()=>{[props.deleteFunction(props?.idToDelete)]}}>{props?.second}</Typography>
            </MenuItem>
          </Menu>
    </>
  )
}

Dropdown.propTypes = {
  first: PropTypes.string,
  second: PropTypes.string,
  setName: PropTypes.func,
  name: PropTypes.string,
  deleteFunction:PropTypes.func,
  idToDelete :PropTypes.any
  // db.orgId:PropTypes.string
};