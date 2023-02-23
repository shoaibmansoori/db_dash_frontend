import React from 'react'
import { Card, CardContent, Typography, Box } from '@mui/material'
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import Dropdown from '../dropdown'

export default function SingleDatabase(props) {
    
  return (
    <Card sx={{ minWidth: 250, minHeight: 200, boxShadow: 2 }}>
      <Link to={{ pathname: "/db/" + props.db._id}}  state = {{db: props.db}}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box>
              <Typography>{props.db.name}</Typography>
              <Typography>{props.db._id}</Typography>
            </Box>
            <Box>
              <Dropdown first={"Rename Database"} second={"Delete Database"} />
            </Box>
          </Box>
        </CardContent>
      </Link>
    </Card>
  )
}

SingleDatabase.propTypes = {
  db: PropTypes.shape({
    name: PropTypes.string,
    _id: PropTypes.string
  })
};
