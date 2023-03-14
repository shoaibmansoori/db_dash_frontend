import React from 'react'
import { PropTypes } from 'prop-types';
import { Box } from '@mui/system';
import CodeSnippet from '../codeSnippet';
function AddRecord(props) {
  return (
    <>
    <div>
        <h2>Add Table Records</h2>
        <p>
        To create new records, issue a POST request to the {props.table} endpoint.<br/>
        Returns an array of record objects created if the call succeeded<br/>
      </p>
    </div>
    <br/>
    <Box>
      <CodeSnippet  codeString={`"https://localhost:5000/${props.db}/${props.table}"`}/>
      <p>{`-H "Authorization: Bearer YOUR_SECRET_API_TOKEN" `}</p>
      <p>{`-H "Content-Type: application/json"` }</p>
    </Box>
    </>
  )
}
AddRecord.propTypes = {
  db: PropTypes.string,
  table:PropTypes.string
}
export default AddRecord