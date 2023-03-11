import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Button, Typography, Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import TablesList from "../component/table/tablesList";
import { Link } from 'react-router-dom'
<<<<<<< HEAD



function DbDetails(props) {

    const location = useLocation();
    const [dbData, setDbData] = useState(null);
    // const dispatchs=useDispatch();
    const getData=()=>{
    //    dispatchs(bulkAddColumns(makeData(10)));
    }
   
    useEffect(() => {
      getData();
    },[]);

    useEffect(() => {   
=======
import { Divider } from "@mui/material";
import MainNavbar from "../component/mainNavbar";
function DbDetails(props) {
    const location = useLocation();
    const [dbData, setDbData] = useState(null);
    useEffect(() => {
>>>>>>> 3026241893df574afa63f4177af6bf92cda3fe7e
        if (location?.state) {
            setDbData(location?.state);
        } else {
            // handle case where no data was passed
        }
    }, [props?.location?.state]);
    return (
        <>
<<<<<<< HEAD
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
=======
        <Box>
      <MainNavbar/>
    </Box>
            <Container sx={{height:'40px'}}>
                {dbData ? (
                    <>
                    <Typography variant="body1" align="center">
                        {dbData.db.name}
                    </Typography>
                    <div style={{width: "60px",  right: "20px",   position: "absolute",top:"60px"}}>
                      <Link to={{ pathname: "/apiDoc/db/:dbId/table/:tableName" }} style={{ textDecoration: "none" }}>
                          <Button variant="contained" color="primary" size="small">APIs</Button>
                  </Link>
                  </div>
                  </>
                ) : (
                    <Typography variant="body1" align="center">
                        No data to display.
                    </Typography>
                )}
            </Container>
            <Divider color="black" variant="fullWidth" sx={{ mb: 2}}  />
            <Box align="center">
                <TablesList dbData={dbData} />
            </Box>
        </>
>>>>>>> 3026241893df574afa63f4177af6bf92cda3fe7e
    );
}
export default DbDetails;
DbDetails.propTypes = {
    location: PropTypes.shape({
        state: PropTypes.object
    })
};