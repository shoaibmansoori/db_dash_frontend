import React from 'react'
import { PropTypes } from 'prop-types';
import { Box } from '@mui/system';


function DeleteRecord(props) {
  console.log("DeleteRecord Props : ",props);
  return (
    <>
    <div>Delete Record</div>
    <Box>
    {
      `curl "https://localhost:5000/${props.db}/${props.table}/:id"`}
    </Box>
    </>
  )
}

DeleteRecord.propTypes = {
  db: PropTypes.string,
  table:PropTypes.string
}
export default DeleteRecord