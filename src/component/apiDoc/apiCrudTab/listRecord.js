import React from 'react'
import { PropTypes } from 'prop-types';
import { Box } from '@mui/system';
// import { getTable } from '../../../api/tableApi'
import CodeSnippet from '../codeSnippet';

function ListRecord(props) {

  return (
    <>
    <div>List Record</div>
    <Box>
      <CodeSnippet  codeString={`"https://localhost:5000/${props.db}/${props.table}"`}/>
    </Box>
    </>
  )
}
ListRecord.propTypes = {
  db: PropTypes.string,
  table:PropTypes.string
}

export default ListRecord