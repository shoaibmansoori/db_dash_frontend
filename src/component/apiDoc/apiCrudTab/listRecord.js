import React from 'react'
import { PropTypes } from 'prop-types';

function ListRecord(props) {
  console.log("ListRecord Props : ",props);
  return (
    <div>List Record</div>
  )
}
ListRecord.propTypes = {
  db: PropTypes.string,
  table:PropTypes.string
}

export default ListRecord