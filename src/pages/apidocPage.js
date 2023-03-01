import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {Box, Typography, Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import navbarApi from "../component/apiDoc/navbarApi";

function apidocPage(props) {
    const location = useLocation();
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
        {/* <Container maxWidth="sm">
           
                <Typography variant="body1" align="center">
                    {dbData.db.name}
                </Typography>
           
        </Container> */}
        

        <Box align="center">
        <navbarApi/>
        
   </Box>
   </>
    );
}

export default apidocPage;
apidocPage.propTypes = {
    location: PropTypes.shape({
        state: PropTypes.object
    })
};
