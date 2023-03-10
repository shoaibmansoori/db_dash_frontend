
import React from 'react'
import PropTypes from "prop-types";
export default function SingleTable(props) {
  return (
    <>
      <h1>{props?.table}</h1>
    </>
  )
}
SingleTable.propTypes = {
  table: PropTypes.string,
  dbId: PropTypes.string
};