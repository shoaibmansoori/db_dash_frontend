import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {Box, Typography, Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import TablesList from "../component/table/tablesList";


function DbDetails(props) {
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
        <Box align="center">
        <TablesList dbData ={dbData} />
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
