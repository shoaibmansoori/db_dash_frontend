import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { UserAuth } from "../../context/authContext.js"
import { findUserByEmail } from "../../api/userApi"
import { Button, Select, MenuItem, FormControl, InputLabel, ListSubheader } from "@mui/material";
import ApiCrudTablist from './apiCrudTab/apiCrudTablist';
import { getDbById } from '../../api/dbApi';
import { Link } from 'react-router-dom' 
import PropTypes from "prop-types";

export default function Navbar() {

  const [alldbs, setAllDbs] = useState(false);
  const [tables, setTables] = useState({});
  const [selectedOption,setSelectedOption] = useState('');
  const [selectTable,setSelectTable] = useState('');

  const handleChange = async (event) => {
    setSelectedOption(event.target.value);

    await getAllTableName(event.target.value)
  };
  const handleChangeTable = async (event) => {
    //console.log(event.target.value)
    setSelectTable(event.target.value);
  };

  const { user } = UserAuth();
  useEffect(() => {
    if (user?.email)
      getOrgAndDb();
  }, [user])
  const filterDbsBasedOnOrg = async (allDbs) => {

    var result = {};
    allDbs.map((item) => {
      result[item.org_id._id] = result[item.org_id._id] ? [...result[item.org_id._id], item] : [item]
    })
    
    setSelectedOption(result?.[Object.keys(result)?.[0]]?.[0].name);
    setAllDbs(result);
  }
  console.log(alldbs?.[Object.keys(alldbs)?.[0]]?.[0].name)
  // console.log(alldbs)

  

  const getOrgAndDb = async () => {
    const data = await findUserByEmail(user?.email);

    localStorage.setItem("userid", data?.data?.data?._id);

    filterDbsBasedOnOrg(data?.data?.data?.dbs)
  }


  const getAllTableName = async (dbId) => {
    const data = await getDbById(dbId)
    setTables(data.data.data.tables || {});
  }

  console.log("Console",selectedOption);

  return (
    <>
      <Box align="center">
        {/* <navbarApi/> */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant="contained" color="primary" sx={{m:1}} disabled>APIs Documentation</Button>
          <Link to='/authkeypage' state={selectedOption} style={{textDecoration:'none'}}>
          <Button variant="contained" color="primary">Auth Key</Button>
          </Link>
        </Box>
   </Box>
   <Box >
   <FormControl sx={{ m: 1, minWidth: 120 }}>
  <InputLabel htmlFor="grouped-select">Organization-dbs</InputLabel>
  <Select
    id="grouped-select"
    label="Organization and dbs"
    value={selectedOption}
    onChange={handleChange}
   
  >
    {Object.entries(alldbs).map(([orgId, dbs]) => [
        <ListSubheader key={`${orgId}-header`}  name={orgId}>{orgId}</ListSubheader>,
        dbs?.map((db) => (
          <MenuItem key={db?._id} value={db?._id}>
            {db?.name}
          </MenuItem>
        ))
    ]
        )}
  </Select>
</FormControl>
     </Box>
     <br></br>
     <Box >
     { console.log(tables)}
         <Select  value={selectTable}
        onChange={handleChangeTable} >
         { Object.entries(tables)?.map((table) => (
          <MenuItem key = {table[0]}value={table[0]} >
            {table[0]}
          </MenuItem>   
         ))}
         </Select>
     </Box>
     <Box>
      <ApiCrudTablist db={selectedOption} table={selectTable}/>
     </Box>
        </>
  )
}
Navbar.propTypes = {
  dbData: PropTypes.any,
  dbId: PropTypes.string,
  orgId: PropTypes.string,
};