import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/system';



export default function AuthKeyDropdown() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);

  }
    
  return (

    
    <>  
       <Box>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Add Space</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Add Space"
          onChange={handleChange}
        >
          <MenuItem value={1}>Read</MenuItem>
          <MenuItem value={2}>Write</MenuItem>
        </Select>
      </FormControl>

    </Box>
    </>
  );
}

AuthKeyDropdown.propTypes = {};













