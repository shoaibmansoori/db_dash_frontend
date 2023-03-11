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
  const [dbId,setDbId] = useState("")
  const [selectedOption, setSelectedOption] = useState();
  const [selectedDb,setSelectedDb] = useState(null);
  const [selectTable, setSelectTable] = useState('');
  const handleChange = async (event) => {
    setSelectedDb(event.target.value);
    setSelectedOption(event.target.value);
<<<<<<< HEAD
    await getAllTableName(event.target.value)
  };
  const handleChangeTable =  async (event) => {
=======
    setDbId(event.target.value)
    await getAllTableName(event.target.value)
  };
  const handleChangeTable = async (event) => {
>>>>>>> 3026241893df574afa63f4177af6bf92cda3fe7e
    setSelectTable(event.target.value);
  };
  const { user } = UserAuth();
  useEffect(() => {
    if (user?.email)
      getOrgAndDb();
<<<<<<< HEAD
    },[user])
    const filterDbsBasedOnOrg = async (allDbs)=>
    {
      var result = {};
      allDbs.map((item)=>{
          result[item.org_id._id]=result[item.org_id._id]?[...result[item.org_id._id],item]:[item]
      })
      setAllDbs(result);
    }
    useEffect(()=>{
    },[selectTable])
    
    const getOrgAndDb = async()=>
    {
      const data = await findUserByEmail(user?.email);
      localStorage.setItem("userid",data?.data?.data?._id);
      filterDbsBasedOnOrg(data?.data?.data?.dbs)
    }
      
     const getAllTableName = async (dbId)=>{
       const data =  await getDbById(dbId)
        setTables(data.data.data.tables  || {});
     }
    
  return (
    <>
    <Box align="center">
        <Box sx={{ display: 'flex', justifyContent: 'center' ,alignItems:'center'}}>
            <Button variant="contained" color="primary">APIs Documentation</Button>
            <Button variant="contained" color="primary">Auth Key</Button>
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
      <ApiCrudTablist/>
     </Box>
        </>
=======
  }, [user])
  const filterDbsBasedOnOrg = async (allDbs) => {
    var result = {};
    allDbs.map((item) => {
      result[item.org_id._id] = result[item.org_id._id] ? [...result[item.org_id._id], item] : [item]
    })
    setSelectedOption(result?.[Object.keys(result)?.[0]]?.[0].name);
    console.log(selectedOption)
    setSelectedDb(result?.[Object.keys(result)?.[0]]?.[0]._id)
    // console.log(result?.[Object.keys(result)?.[0]]?.[0]._id)
    setAllDbs(result);
  }
  const getOrgAndDb = async () => {
    const data = await findUserByEmail(user?.email);
    localStorage.setItem("userid", data?.data?.data?._id);
    filterDbsBasedOnOrg(data?.data?.data?.dbs)
  }
  const getAllTableName = async (dbId) => {
    const data = await getDbById(dbId)
    setTables(data.data.data.tables || {});
    setSelectTable(Object.keys(data.data.data.tables)[0])
  }
  
  return (
    <>
   <Box align="center">
        {/* <navbarApi/> */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant="contained" color="primary" sx={{m:1}} disabled>APIs Documentation</Button>
          <Link to= {`/authkeypage/${dbId}`} state={selectedOption} style={{textDecoration:'none'}}>
          <Button variant="contained" color="primary">Auth Key</Button>
          </Link>
        </Box>
   </Box>
      <Box >
        {alldbs && <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="grouped-select">Organization-db</InputLabel>
          <Select id="grouped-select" label="Organization and dbs"  value={selectedDb}  onChange={handleChange}>
            {Object.entries(alldbs).map(([orgId, dbs]) => [
              <ListSubheader key={`${orgId}-header`} name={orgId}>{dbs[0].org_id.name}</ListSubheader>,
              dbs?.map((db,index) => (
                <MenuItem key={index} value={db?._id}>{db?.name} </MenuItem>
              ))
            ]
            )}
            {/* defaultValue={selectedOption} */}
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
        <ApiCrudTablist db={selectedOption} table={selectTable}/>
      </Box>
    </>
>>>>>>> 3026241893df574afa63f4177af6bf92cda3fe7e
  )
}
Navbar.propTypes = {
  dbData: PropTypes.any,
  dbId: PropTypes.string,
  orgId: PropTypes.string,
};