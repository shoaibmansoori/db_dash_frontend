import React, { useState } from "react";
import Dropdown from "../dropdown";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import PopupModal from "../popupModal";
import { Box,Card, Typography, TextField } from "@mui/material";
import SingleDatabase from "./singleDatabase";
import { createDb } from "../../api/dbApi";
import PropTypes from "prop-types";
import { updateOrg, deleteOrg } from "../../api/orgApi";

export const OrgList = (props) => {
  const [name, setName] = useState(false);
  const [orgName, setOrgName] = useState();
  const [db, setDb] = useState(false);
  const [open, setOpen] = useState(false);
  const [orgId, setOrg] = useState();
  const handleOpen = () => setOpen(true);

  const saveDb = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userid");
    const data = {
      user_id: userId,
      name: db,
    };
    setOpen(false);
    await createDb(orgId, data);
    await props?.getOrgAndDbs();
  };

  const renameWorkspace = async (orgId) => {
    const data = {
      name: orgName,
    };
    await updateOrg(orgId, data);
    await props?.getOrgAndDbs();
  };

  const deleteOrganization = async (orgId) => {
    // console.log("handle org",orgId);
    await deleteOrg(orgId);
    await props?.getOrgAndDbs();
  };

  return (
    <>
      <Box key={props?.orgId} sx={{ m: 3 }}>
        <Box sx={{ my: 7, display: "flex" }}>
          {name ? (
            <>
              <TextField
                sx={{ width: 120, fontWeight: "bold" }}
                defaultValue={props.dbs[0]?.org_id?.name}
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                size="small"
              />

              <Button
                onClick={() => {
                  setName(false);
                  renameWorkspace(props?.orgId);
                }}
                variant="contained"
                sx={{
                  width: "8rem",
                  backgroundColor: "#1C2833",
                  fontSize: "12px",
                  mx: 3,
                  ":hover": {
                    bgcolor: "#273746",
                    color: "white",
                    border: 0,
                    borderColor: "#1C2833",
                  },
                }}
              >
                Rename
              </Button>
            </>
          ) : (
            <>
              <Typography sx={{ fontWeight: "bold" }}>
                {props.dbs[0]?.org_id?.name}{" "}
              </Typography>

              <Box sx={{ mt: -1 }}>
                <Dropdown
                  first={"Rename workspace"}
                  second={"Delete workspace"}
                  setName={setName}
                  idToDelete={props?.orgId}
                  deleteFunction={deleteOrganization}
                />
              </Box>
            </>
          )}
        </Box>

        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex" }}>
            <Grid container spacing={2}>
              {props.dbs.map((db) => (
                <Box key={db._id} sx={{ m: 4, display: "flex" }}>
                  <SingleDatabase db={db} getOrgAndDbs={props?.getOrgAndDbs} />
                </Box>
              ))}

              <Card sx={{m: 4, minWidth: 250, minHeight: 200, boxShadow: 2 ,display: "flex" ,alignItems:"center",justifyContent:"center" }}>
               
                  <Button 
                    onClick={(e) => {
                      handleOpen(e);
                      setOrg(props?.orgId);
                    }}
                    variant="contained"
                  >
                    Create Db
                  </Button>
              </Card>
            </Grid>
            <PopupModal
              title="create Database"
              open={open}
              setOpen={setOpen}
              label="Database Name"
              saveFunction={saveDb}
              setVariable={setDb}
            />
          </Box>
        </Box>
      </Box>
      <Box></Box>
    </>
  );
};
OrgList.propTypes = {
  dbs: PropTypes.array,
  orgId: PropTypes.string,
  getOrgAndDbs: PropTypes.func,
};
