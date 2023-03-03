import  React,{useState} from 'react';
import {Box,Tab} from '@mui/material';
import {TabContext,TabList,TabPanel} from '@mui/lab';
import Curl from './curl.js';
import  JavaScript  from './javascript.js';

export default function CodeTab() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '50%',right:1,mt:"-72px",position:'fixed', border: '3px solid black', 
    typography: 'body1',height: '700px' ,marginBottom:'10px' , borderRadius:'16px'}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider',border:'2px solid black' , borderRadius:'5px' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Curl" value="1" />
            <Tab label="JavaScript" value="2" />
            {/* <Tab label="Item Three" value="3" /> */}
          </TabList>
        </Box>
        <TabPanel value="1"> <Curl/> </TabPanel>
        <TabPanel value="2"> <JavaScript/> </TabPanel>
        {/* <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
    </Box>
  );
}