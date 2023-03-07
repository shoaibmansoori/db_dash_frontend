import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {Box,Button, Typography, Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import TablesList from "../component/table/tablesList";
import { Link } from 'react-router-dom'



function DbDetails(props) {
// console.log("dblist",props)

    const location = useLocation();
    const [dbData, setDbData] = useState(null);
    // console.log("db",dbData)
    // const dispatchs=useDispatch();
    const getData=()=>{
      console.log("dvnjf,vjb ")
    //    dispatchs(bulkAddColumns(makeData(10)));
    }
   
    useEffect(() => {
      console.log("dabv bta")
      getData();
    },[]);

    useEffect(() => {   
        if (location?.state) {
            setDbData(location?.state);
        } else {
            // handle case where no data was passed
        }
    }, [props?.location?.state]);

    return (
        <>
        <Container maxWidth="sm">
            {dbData ? (
                <Typography variant="body1" align="center">
                    {dbData.db.name}
                </Typography>
            ) : (
                <Typography variant="body1" align="center">
                    No data to display.
                </Typography>
            )}
        </Container>
        <Link to={{pathname: "/apiDoc/db/:dbId/table/:tableName"}} state={{data : dbData}}    >
           
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" color="primary">APIs</Button>
        </Box>
        </Link>
        <Box align="center">
        <TablesList dbData ={dbData} />
        {/* <Navbar data={props}/> */}
   </Box>
   </>
    );
}

export default DbDetails;
DbDetails.propTypes = {
    location: PropTypes.shape({
        state: PropTypes.object
    })
};
