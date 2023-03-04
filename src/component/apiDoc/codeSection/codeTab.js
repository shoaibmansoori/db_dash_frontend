import  React,{useState} from 'react';
import {Box,Tab} from '@mui/material';
import {TabContext,TabList,TabPanel} from '@material-ui/lab';
// import Curl from './curl.js';
import  JavaScript  from './javascript.js';
import Curl from '../../table/curl.js';
export default function CodeTab() {
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '50%',right:1,mt:"-72px",position:'fixed', border: '1px solid #d2d2d2', bgcolor : "hsl(214,5%,20%)", color: 'white',
    typography: 'body1',height: '700px' ,marginBottom:'10px' , borderRadius:'4px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider',border:'px solid black' , borderRadius:'px' ,bgcolor : "hsl(214,5%,20%)"}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Curl" value="1" />
            <Tab label="JavaScript" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"> <Curl/> </TabPanel>
        <TabPanel value="2"> <JavaScript/> </TabPanel>
      </TabContext>
    </Box>
  );
}