import React from 'react'
import { Card, CardContent, Typography, Box } from '@mui/material'
import Dropdown from '../dropdown'
import PropTypes from "prop-types"



export default function SingleDatabase() {
  return (

    <Card sx={{ minWidth: 250, minHeight: 200, boxShadow: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box >
            <Typography>Database-1</Typography>
          </Box>
          <Box>
            <Dropdown first={"Rename Database"} second={"Delete Database"} />
          </Box>
          </Box>

          
      </CardContent>
    </Card>

  )
}

SingleDatabase.propTypes = {
  name  : PropTypes.string
}
