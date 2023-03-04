import React from 'react'
import { PropTypes } from 'prop-types';


function UpdateRecord(props) {
  console.log("UpdateRecord Props : ",props);
  return (
    <div>Update Record</div>
  )
}
UpdateRecord.propTypes = {
  db: PropTypes.string,
  table:PropTypes.string
}
export default UpdateRecord