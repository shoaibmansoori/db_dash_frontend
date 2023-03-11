import React from 'react'
import { PropTypes } from 'prop-types';
import { Box } from '@mui/system';
import CodeSnippet from '../codeSnippet';
function DeleteRecord(props) {
  return (
    <>
    <div>
    <h2>Delete Table Records</h2>
        <p>
        To delete Table  record, use the delete method. Note that table names and table ids can be used interchangeably.<br/>
        Using table ids means table name changes do not require modifications to your API request.
      </p>
    </div>
    <Box>
      <CodeSnippet  codeString={`"https://localhost:5000/${props.db}/${props.table}/{:id}"`}/>
    </Box>
    </>
  )
}
DeleteRecord.propTypes = {
  db: PropTypes.string,
  table:PropTypes.string
}
export default DeleteRecord