
import React from 'react'
import PropTypes from "prop-types";
import MainTable from '../../table/mainTable';
export default function SingleTable(props) {
  
  return (
    <>
      <h1>{props?.table}</h1>
      <MainTable/>
    </>
  )
}
SingleTable.propTypes = {
  table: PropTypes.string,
  dbId: PropTypes.string
};