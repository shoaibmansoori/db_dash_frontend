import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Typography, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";


function DbDetails(props) {
    const location = useLocation();
    const [dbData, setDbData] = useState(null);

    useEffect(() => {
        console.log(location.state)
        if (location?.state) {
            setDbData(location?.state);
        } else {
            // handle case where no data was passed
        }
    }, [props?.location?.state]);

    return (
        <Grid container direction="column" spacing={2}>
            {dbData ? (
                <Grid item>
                    <Typography variant="body1">Database Name: {dbData.db.name}</Typography>
                    {/* display other details */}
                </Grid>
            ) : (
                <Grid item>
                    <Typography variant="body1">No data to display.</Typography>
                </Grid>
            )}
        </Grid>
    );
}

DbDetails.propTypes = {
    location: PropTypes.shape({
        state: PropTypes.object
    })
};

export default DbDetails;
