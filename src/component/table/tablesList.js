import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { createTable } from '../../api/tableApi';
import PropTypes from "prop-types";

export default function TablesList (props ) {
  const [tableCount, setTableCount] = useState(0);
  const [tables, setTables] = useState([]);

  const saveTable = async (e) => {
      const dbId = props.dbData.db._id;
    e.preventDefault();
    const data = {
        tableName: "default_table"
    }
    await createTable(dbId, data);
  };
  const addTable = () => {
    setTableCount(tableCount + 1);
    setTables([...tables, `Table ${tableCount + 1}`]);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1px', flexWrap: 'wrap' }}>
      {tables.map((table, index) => (
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
          {table}
        </Box>
      ))}
      <Button
        startIcon={<AddIcon />}
        sx={{
          borderRadius: '8px',
          backgroundColor: '#4caf50',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#388e3c',
          },
        }}
        onClick={(e)=>{addTable();saveTable(e)}}
      >
        Add Table
      </Button>
      
    </Box>
  );
}
TablesList.propTypes = {
    dbData: PropTypes.any
};


