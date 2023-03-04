import React,{useState} from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BasicStuff from './basicStuff';
import RetrieveRecord from './retrieveRecord';
import ListRecord from './listRecord';
import AddRecord from './addRecord';
import UpdateRecord from './updateRecord';
import DeleteRecord from './deleteRecord';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function ApiCrudTablist() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
     <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Basic stuff" {...a11yProps(0)} />
          <Tab label="Retrieve a record" {...a11yProps(1)} />
          <Tab label="List/Search records" {...a11yProps(2)} />
          <Tab label="Add records" {...a11yProps(3)} />
          <Tab label="Update records" {...a11yProps(4)} />
          <Tab label="Delete records" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <BasicStuff/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RetrieveRecord/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ListRecord/>
      </TabPanel>
      <TabPanel value={value} index={3}>
       <AddRecord/>
      </TabPanel>
      <TabPanel value={value} index={4}>
       <UpdateRecord/>
      </TabPanel>
      <TabPanel value={value} index={5}>
       <DeleteRecord/>
      </TabPanel>
    </Box>
    </>
  )
}

export default ApiCrudTablist