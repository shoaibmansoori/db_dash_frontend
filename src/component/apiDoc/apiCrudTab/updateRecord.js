import React from 'react'
import { PropTypes } from 'prop-types';
import { Box } from '@mui/system';


function UpdateRecord(props) {
  console.log("UpdateRecord Props : ",props);
  return (
    <>
    <div>Update Record</div>
    <Box>
    {
      `curl "https://localhost:5000/${props.db}/${props.table}/:id"`}
    </Box>
    </>
  )
}
UpdateRecord.propTypes = {
  db: PropTypes.string,
  table:PropTypes.string
}
export default UpdateRecord