import React, { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PopupModal from '../popupModal';
import { createTable } from '../../api/tableApi';
import { getDbById } from '../../api/dbApi';
import PropTypes from "prop-types";

export default function TablesList (props ) {
  const [tables, setTables] = useState({});


 //state to display modal
 const [table, setTable] = useState();
 const [open, setOpen] = useState(false);
 const handleOpen = () => setOpen(true);


  const saveTable = async (e) => {
    e.preventDefault();
      const dbId = props?.dbData?.db._id;
       const data = {
        tableName: table
      }

     await createTable(dbId,data);
     getAllTableName(props?.dbData?.db?._id, props?.dbData?.db?.org_id?._id)
   
  };

  useEffect(() => {
   if(props?.dbData)
   getAllTableName(props?.dbData?.db?._id, props?.dbData?.db?.org_id?._id)
  },[props]);

  const getAllTableName = async (dbId,orgId)=>{
    const data =  await getDbById(dbId,orgId)
      setTables(data.data.data.tables || []);
     return data;
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1px', flexWrap: 'wrap' }}>
      <Typography> </Typography>
      { Object.entries(tables).map((table, index) => (
        <Box
          key={index}
          sx={{
            p: '6px',
            borderRadius: '8px',
            border: '1px solid rgba(0, 0, 0, 0.2)',
            backgroundColor: '#fff',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            minWidth: '150px',
            maxWidth: '200px',
            width: '100%',
            textAlign: 'center',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
           {table[0]}
         </Box>
      ))} 
      <Box
        // startIcon={<AddIcon />}
        sx={{
          borderRadius: '8px',
          backgroundColor: '#4caf50',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#388e3c',
          },
        }}
        
      >
     
      <Button onClick={handleOpen} >Add Table</Button>
      <PopupModal title="create table" label="Table Name"   open={open} setOpen ={setOpen} saveFunction = {saveTable}  setVariable={setTable}/>
      </Box>
    </Box>
  );
}
TablesList.propTypes = {
    dbData: PropTypes.any,
    dbId: PropTypes.string,
    orgId: PropTypes.string,
};


