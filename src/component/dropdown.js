import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Menu,
  MenuItem,
  Tooltip,
  IconButton,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteAuthKeyPopup from './authKeyComponents/authKeyTablePopup/deleteAuthkeyPopup';

export default function Dropdown(props) {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (event) => {
    event.stopPropagation();
    setAnchorElUser(null);
  };

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  return (
    <>
      <Tooltip>
        <IconButton
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            handleOpenUserMenu(event);
          }}
        >
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
          <Typography textAlign="center">{props?.first}</Typography>
        </MenuItem>

        <MenuItem
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            handleCloseUserMenu(event);
            setOpen(true);
          }}
        >
          <Typography textAlign="center">{props?.second}</Typography>
        </MenuItem>

        <MenuItem onClick={(event)=>{handleCloseUserMenu(event);setOpen(true)}}>
          <Typography textAlign="center">{props?.third}</Typography>
        </MenuItem>
        <DeleteAuthKeyPopup
          open={open}
          setOpen={setOpen}
          title={props?.title}
          deleteFunction={props?.deleteFunction}
        />
      </Menu>
    </>
  );
}

Dropdown.propTypes = {
  first: PropTypes.string,
  second: PropTypes.string,
  third: PropTypes.string,
  title: PropTypes.string,
  deleteFunction: PropTypes.func,
};






