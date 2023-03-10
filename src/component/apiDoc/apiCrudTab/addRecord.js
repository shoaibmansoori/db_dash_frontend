import React from 'react'
import { PropTypes } from 'prop-types';
import { Box } from '@mui/system';
import CodeSnippet from '../codeSnippet';
function AddRecord(props) {
  console.log("AddRecord Props : ",props);
  return (
    <>
    <div>Add Record</div>
    <Box>
      <CodeSnippet  codeString={`"https://localhost:5000/${props.db}/${props.table}"`}/>
    </Box>
    </>
  )
}
AddRecord.propTypes = {
  db: PropTypes.string,
  table:PropTypes.string
}
export default AddRecord