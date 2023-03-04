import React, { useEffect } from 'react'
import { PropTypes } from 'prop-types';
import { getTable } from '../../../api/tableApi';

 function BasicStuff(props) {
  console.log("BasicStuff Props : ",props);
  const tableData = async ()=>{
    const temp = await getTable(props.db,props.table)
    console.log("temp",temp);
  }

  useEffect(()=>{
    tableData();
  })

  return (
    <div>Basic Stuff</div>
  )
}

BasicStuff.propTypes = {
  db: PropTypes.string,
  table:PropTypes.string
}

export default BasicStuff