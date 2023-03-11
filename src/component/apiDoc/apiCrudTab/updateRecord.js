import React from 'react'
import { PropTypes } from 'prop-types';
import { Box } from '@mui/system';
import CodeSnippet from '../codeSnippet';
function UpdateRecord(props) {
  return (
    <>
    <div>
       <h2>Update Table Records</h2>
        <p>
        To update Table records issue a request to the Table endpoint.Table names and table IDs can be used interchangeably.<br/>
        Using table IDs means table name changes would not require modifying your API request code.<br/>
        A PATCH request will only update the fields included in the request.Fields not included in the request will be unchanged.<br/>
        A PUT request will perform a destructive update and clear all unincluded cell values.<br/>
        </p>
    </div>
    <Box>
      <CodeSnippet  codeString={`"https://localhost:5000/${props.db}/${props.table}/{:id}"`}/>
    </Box>
    </>
  )
}
UpdateRecord.propTypes = {
  db: PropTypes.string,
  table:PropTypes.string
}
export default UpdateRecord