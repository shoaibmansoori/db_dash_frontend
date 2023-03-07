import React, { useEffect, useState} from "react";
import Dropdown from "../dropdown";
import {
  Table,
  TableBody,
  Box,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
} from "@mui/material";

import { PropTypes } from 'prop-types';
import { getAuthkey } from "../../api/authkeyApi";
export default function AuthKey(props) {

  const adminId = localStorage.getItem("userid");
  console.log("Hariom Props : ", props.dbId);
  console.log("Admin Id : ",adminId);
  const[authKeys,setAuthKeys] = useState(null)
  

  useEffect(  ()=>{
    getAuthkeyFun()
  },[])

  async function getAuthkeyFun(){
  const data = await getAuthkey(props.dbId,adminId) 
  setAuthKeys(data?.data?.data)
  console.log("idris",Object.keys(authKeys))
  }
  
  console.log("AuthKeys : ",authKeys);
 

  console.log("AuthKeys : ",authKeys);
 
  return (
    <>
      <Box sx={{ border: 1, m: 1, boxShadow: 10 }}>
        <TableContainer
          component={Paper}
          sx={{ width: "100%", maxHeight: 533 }}
        >
          <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Access</TableCell>
                <TableCell>Scopes</TableCell>
                <TableCell>Created By</TableCell>
                <TableCell>Created Date By</TableCell>
                <TableCell>Action</TableCell>
                <TableCell> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {authKeys && Object.keys(authKeys).map((keys) => (
                <TableRow
                  key={keys}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {/* {keys} */}
                    {authKeys[keys].user}
                  </TableCell>
                  <TableCell>{authKeys[keys].access}</TableCell>
                  <TableCell>{authKeys[keys].scope}</TableCell>
                  <TableCell>{authKeys[keys].createBy}</TableCell>
                  <TableCell>{authKeys[keys].createDate}</TableCell>
                  <TableCell>      <Dropdown first={"Edit"} second={"Delete"} third={"Show AuthKey"} />
</TableCell>
            
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

AuthKey.propTypes = {
  dbId: PropTypes.string
}