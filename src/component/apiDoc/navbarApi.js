import { Box } from '@mui/material'
import React,{useEffect, useState} from 'react'
import { UserAuth } from "../../context/authContext.js"
import {findUserByEmail} from "../../api/userApi"
import {Button,Select,MenuItem} from "@mui/material";
import FormControl from '@mui/material/FormControl';
import ApiCrudTablist from './apiCrudTab/apiCrudTablist';
import ListSubheader from '@mui/material/ListSubheader';
import InputLabel from '@mui/material/InputLabel';
import PropTypes from "prop-types";
import { getDbById } from '../../api/dbApi';

export default function Navbar() {
  
  const [alldbs,setAllDbs] = useState([]);
  const [tables, setTables] = useState({});
  const [selectedOption,setSelectedOption] = useState('');
  const [selectTable,setSelectTable] = useState('');
  const handleChange = async (event) => {
    setSelectedOption(event.target.value);
    console.log("event",  event.target)    
    await getAllTableName(event.target.value)
  };
  const handleChangeTable =  async (event) => {
    console.log(event.target.value)
    setSelectTable(event.target.value);
  };
  const {user} = UserAuth();
  useEffect(()=>{
    if(user?.email)
      getOrgAndDb();
    },[user])
    const filterDbsBasedOnOrg = async (allDbs)=>
    {
      console.log(allDbs);
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
    // useEffect(() => {
    //   if(props?.dbData)
    //   getAllTableName(dbData?.db?._id)
      
    //  },[props]);
      
     const getAllTableName = async (dbId)=>{
       const data =  await getDbById(dbId)
        setTables(data.data.data.tables  || {});
        console.log("data",data,tables);
     }
    
  return (
    <>
    <Box align="center">
        {/* <navbarApi/> */}
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
      <ApiCrudTablist/>
     </Box>
        </>
  )
}
Navbar.propTypes = {
  dbData: PropTypes.any,
  dbId: PropTypes.string,
  orgId: PropTypes.string,
};