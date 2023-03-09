import React, { useEffect } from 'react'
import { PropTypes } from 'prop-types';
import { getTable } from '../../../api/tableApi';
import CodeSnippet from '../codeSnippet';
 function BasicStuff(props) {
  const tableData = async ()=>{
    await getTable(props.db,props.table)
  }

  useEffect(()=>{
    tableData();
  })

  return (
   <>
    <div>Basic Stuff</div>
    <CodeSnippet codeString="const myVar = 'Hello, world!';" />
   </>
  )
}

BasicStuff.propTypes = {
  db: PropTypes.string,
  table:PropTypes.string
}

export default BasicStuff