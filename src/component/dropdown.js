import React from 'react'
import PropTypes from 'prop-types';
import { Typography, Menu, MenuItem, Tooltip, IconButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import {deleteOrg} from '../api/orgApi.js';
import {deleteDb} from '../api/dbApi.js';


export default function Dropdown(props) {

    const [anchorElUser, setAnchorElUser] = React.useState(null);
    
  

    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    // const deleteOrganization = async() => {
    //   // e.preventDefault();
    //   console.log("delete",props?.orgId)
    //     const ans = await deleteOrg(props?.orgId);
    //     // setOpen(false);
    //     console.log("Deelete tavle",ans)
    // }

    const deletDatabases = async(e) => {
      e.preventDefault();
      const response = await deleteDb(props?.db?.orgId?._id,props?.db?._id)
      console.log(response);
    }


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
              <Typography textAlign="center" onClick={(e)=>{deletDatabases(e)}}>{props?.second}</Typography>
            </MenuItem>
          </Menu>
    </>
  )
}

Dropdown.propTypes = {
  first: PropTypes.string,
  second: PropTypes.string,
  setName: PropTypes.func,
  orgId: PropTypes.string,
  alldbs: PropTypes.any,
  name: PropTypes.string,
  db:PropTypes.object,
  // db.orgId:PropTypes.string
};