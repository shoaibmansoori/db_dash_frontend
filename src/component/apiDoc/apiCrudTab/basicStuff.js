import React from 'react'
import { PropTypes } from 'prop-types';
// import { getTable } from '../../../api/tableApi';
import CodeSnippet from '../codeSnippet';
 function BasicStuff(props) {
  console.log("BasicStuff Props : ",props);


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