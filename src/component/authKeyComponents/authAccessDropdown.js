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
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Table 1</MenuItem>
          <MenuItem value={2}>Table 2</MenuItem>
          <MenuItem value={3}>Table 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </>
  );
}
AuthKeyDropdown.propTypes = {};
