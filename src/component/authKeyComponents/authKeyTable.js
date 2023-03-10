import React, { useEffect, useState} from "react";
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
import { getAuthkey,deleteAuthkey} from "../../api/authkeyApi";
import TableMenuDropdown from "./tableMenuDropdown";
export default function AuthKey(props) {

  const adminId = localStorage.getItem("userid");
  // console.log("Hariom Props : ", props.dbId);
  // console.log("Admin Id : ",adminId);
  const[authKeys,setAuthKeys] = useState(null)
  

  useEffect(  ()=>{
    getAuthkeyFun()
  },[])

  async function getAuthkeyFun(){
    // console.log("props",props)
  const data = await getAuthkey(props.dbId,adminId) 
  setAuthKeys(data?.data?.data)
  }

  async function deleteAuthkeyFun(authKey){
    const data = await deleteAuthkey(props.dbId,adminId,authKey)
    console.log("Delete Auth Key Data : ",data);
    return data;
  }

  // console.log("AuthKeys : ",authKeys);
 
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
<<<<<<< HEAD
                <TableCell>Access</TableCell>
                <TableCell>Scopes</TableCell>
=======
                {/* <TableCell>Access</TableCell> */}
                <TableCell>Scope</TableCell>
>>>>>>> 49f47022638b40ba8786dc7dad394bfd380903de
                <TableCell>Created By</TableCell>
                <TableCell>Created On</TableCell>
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
                    {authKeys[keys].name}
                  </TableCell>
                  {/* <TableCell>{authKeys[keys].access}</TableCell> */}
                  <TableCell>{authKeys[keys].scope}</TableCell>
                  <TableCell>{authKeys[keys].createBy}</TableCell>
                  <TableCell>{authKeys[keys].createDate}</TableCell>
                  <TableCell>     
                  <TableMenuDropdown  second={"Delete"} third={"Show AuthKey"} title={keys} deleteFunction={deleteAuthkeyFun}/>
                  </TableCell>
                  {/* first={"Edit"} */}
            
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