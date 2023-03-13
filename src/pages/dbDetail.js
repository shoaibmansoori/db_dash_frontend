import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Button, Typography, Container } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import TablesList from "../component/table/tablesList";
import { Link } from 'react-router-dom'
import { Divider } from "@mui/material";
import MainNavbar from "../component/mainNavbar";
function DbDetails(props) {
    const location = useLocation();
    const { dbId } = useParams();
    console.log("dbId",dbId)
    const [dbData, setDbData] = useState(null);
    useEffect(() => {
        if (location?.state) {
            setDbData(location?.state);
        } else {
            // handle case where no data was passed
        }
    }, [props?.location?.state]);
    return (
        <>
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
                      <Link to={ `/apiDoc/db/:${dbId}` }  style={{ textDecoration: "none" }}>
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
    );
}
export default DbDetails;
DbDetails.propTypes = {
    location: PropTypes.shape({
        state: PropTypes.object
    })
};