import React, { useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
// import CodeSnippet from '../codeSnippet';
import { getAllfields } from '../../../api/fieldApi';
import { Box } from "@mui/system";
function BasicStuff(props) {
  const [fieldData, setFieldData] = useState(null)
  const tableData = async () => {
    const data = await getAllfields(props.db, props.table)
    setFieldData(data?.data?.data?.fields)
  }
  console.log("Fields : ", fieldData)
  useEffect(() => {
    tableData();
  }, [props.db, props.table]);
  return (
    <>
      <Box >
        {fieldData && Object.entries(fieldData).map((fields, index) => (
          <Box
            key={index}
          >
            {fields[0]}-
            {fields[1].fieldType}
          </Box>
        ))}
      </Box>
      {/* <CodeSnippet codeString="const myVar = 'Hello, world!';" /> */}
    </>
  )
}
BasicStuff.propTypes = {
  db: PropTypes.string,
  table: PropTypes.string
}
export default BasicStuff