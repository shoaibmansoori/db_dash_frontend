import { Box } from '@mui/material'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { UserAuth } from "../../context/authContext.js"
import { findUserByEmail } from "../../api/userApi"
import { Button, Select, MenuItem, FormControl, InputLabel, ListSubheader } from "@mui/material";
import ApiCrudTablist from './apiCrudTab/apiCrudTablist';
import { getDbById } from '../../api/dbApi';
import PropTypes from "prop-types";

export default function Navbar() {

  const [alldbs, setAllDbs] = useState(false);
  const [tables, setTables] = useState({});
  const [selectedOption, setSelectedOption] = useState();
  const [selectTable, setSelectTable] = useState('');

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

  

  const getOrgAndDb = async () => {
    const data = await findUserByEmail(user?.email);

    localStorage.setItem("userid", data?.data?.data?._id);

    filterDbsBasedOnOrg(data?.data?.data?.dbs)
  }

  console.log("tables",tables)

  const getAllTableName = async (dbId) => {
    const data = await getDbById(dbId)
    setTables(data.data.data.tables || {});
  }

  

  return (
    <>
   <Box align="center">
        {/* <navbarApi/> */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant="contained" color="primary" sx={{m:1,borderRadius:5}} >APIs Documentation</Button>
          <Link to='/authkeypage' style={{textDecoration:'none'}}>
          <Button  sx={{borderRadius:5}} variant="contained" color="primary">Auth Key</Button>
          </Link>
        </Box>
   </Box>
      <Box >

        {alldbs && <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="grouped-select">Organization-db</InputLabel>

          <Select id="grouped-select" label="Organization and dbs"  value={selectedOption} onChange={handleChange} defaultValue={selectedOption}>

            {Object.entries(alldbs).map(([orgId, dbs]) => [
              <ListSubheader key={`${orgId}-header`} name={orgId}>{dbs[0].org_id.name}</ListSubheader>,

              dbs?.map((db,index) => (

                <MenuItem key={index} value={db?.name}>{db?.name} </MenuItem>

              ))
            ]

            )}
          </Select>
        </FormControl>}
      </Box>

      <br></br>

      <Box >

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="grouped-select">Tables-Name</InputLabel>
          <Select value={selectTable}
            onChange={handleChangeTable} >
            {Object.entries(tables)?.map((table) => (
              <MenuItem key={table[0]} value={table[0]} >
                {table[0]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box>
        <ApiCrudTablist />
      </Box>
    </>
  )
}
Navbar.propTypes = {
  dbData: PropTypes.any,
  dbId: PropTypes.string,
  orgId: PropTypes.string,
};