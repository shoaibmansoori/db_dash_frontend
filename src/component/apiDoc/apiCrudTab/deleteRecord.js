import React from 'react'
import { PropTypes } from 'prop-types';


function DeleteRecord(props) {
  console.log("DeleteRecord Props : ",props);
  return (
    <div>Delete Record</div>
  )
}

DeleteRecord.propTypes = {
  db: PropTypes.string,
  table:PropTypes.string
}
export default DeleteRecord