import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createOrg } from "../api/orgApi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PopupModal(props) {
  const [org, setOrg] = React.useState();

  const saveOrgToDB = async (e) => {
    e.preventDefault();
    // const dataToSend = { name: org, user_id: "sd12sra32fsf" };
    // const response = await createOrg("wefbgftefrd", dataToSend);
    // const response = await createOrg({name: org})
    // console.log(response);
    props.setOpen(false);
  };

  const handleClose = () => props.setOpen(false);

  return (
    <Box>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.title}
          </Typography>
          <Box sx={{ my: 2 }}>
            <TextField
              id="standard-basic"
              label="Organisation Name"
              variant="standard"
              onChange={(e) => {
                setOrg(e.target.value);
              }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Button variant="contained" onClick={saveOrgToDB}>
                Save
              </Button>
            </Box>
            <Box>
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

PopupModal.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
