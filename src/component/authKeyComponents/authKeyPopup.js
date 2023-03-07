import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { FileCopy } from '@mui/icons-material';
import { PropTypes } from 'prop-types';
import { TextField } from '@mui/material';


const AuthKeyPopup = (props) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [copyText, setCopyText] = useState('');
  const handleClose = () => props.setOpen(false);
  // Function to copy result to clipboard
  const handleCopyText = (e) => {
    setCopyText(e.target.value);
 }
  const handleCopyClick = () => {
    navigator.clipboard.writeText(copyText);
    setCopySuccess(true);
  };

  
  return (
    <Dialog open={props.open} onClose={handleClose}>
      <DialogTitle>Create Auth Key</DialogTitle>
      <DialogContent>
      <TextField id="outlined-basic" label="Outlined" variant="outlined"  value={copyText} onChange={handleCopyText}/>
        <IconButton onClick={handleCopyClick}>
          <FileCopy />
        </IconButton>
        {/* Snackbar to display copy success message */}
        <Snackbar open={copySuccess} autoHideDuration={2000} onClose={() => setCopySuccess(false)}>
          <Alert onClose={() => setCopySuccess(false)} severity="success">
            Auth Key copied to clipboard!
          </Alert>
        </Snackbar>
      </DialogContent>
    </Dialog>
  );
};
export default AuthKeyPopup;
AuthKeyPopup.propTypes={
    open:PropTypes.any,
    onClose:PropTypes.any,
    result:PropTypes.any,
    setOpen: PropTypes.func,
}
