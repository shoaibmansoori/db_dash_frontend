import React,{useState} from 'react'
import PropTypes from 'prop-types';
import { Typography, Menu, MenuItem, Tooltip, IconButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AuthKeyPopup from './authKeyPopup';


export default function TableMenuDropdown(props) {
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  return (
    <>
        <Tooltip>
            <IconButton onClick={(e)=>{
              e.preventDefault();
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
              e.stopPropagation();}}>{props?.first}</Typography>
            </MenuItem>
            <MenuItem onClick={(e)=>{e.preventDefault();
              e.stopPropagation();handleCloseUserMenu(e)}}>
              <Typography textAlign="center" >{props?.second}</Typography>
            </MenuItem>
            <MenuItem>
              <Typography textAlign="center"  onClick={handleOpen} >{props?.third}</Typography>
              <AuthKeyPopup open={open}
              setOpen={setOpen}/>
            </MenuItem>
          </Menu>
    </>
  )
}
TableMenuDropdown.propTypes = {
  first: PropTypes.string,
  second: PropTypes.string,
  third: PropTypes.string,
  title: PropTypes.string,
  deleteFunction : PropTypes.func
};
