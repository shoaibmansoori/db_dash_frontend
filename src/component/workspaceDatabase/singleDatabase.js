import React,{useState,useEffect} from 'react'
import { Card, CardContent, Typography, Box,TextField} from '@mui/material'
import Button from '@mui/material/Button';
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import Dropdown from '../dropdown'
import { renameDb,deleteDb } from '../../api/dbApi'
// import {deleteDb} from '../api/dbApi.js';

export default function SingleDatabase(props) {
    

  const [name, setName] = useState(false)
  const [dbname,setDbname ] = useState()

  const renameDatabase = async (orgId,id,name) =>{
   

    const data = {
          name  : dbname||name
    }
     await renameDb(orgId,id,data)
        
};

useEffect(() => {
  // console.log(props?.db?.org_id?._id)
});

const deletDatabases = async(dbId) => {
  await deleteDb(props?.db?.org_id?._id,dbId)
}
    
  return (
    <Card sx={{ minWidth: 250, minHeight: 200, boxShadow: 2 }}>
      <Link to={{ pathname: "/db/" + props.db._id}}  state = {{db: props.db}}>
        <CardContent>

         
            { name?
            (<>
                  <TextField autoFocus sx={{ width: 120, fontWeight: 'bold' }} defaultValue={props.db.name} value ={ dbname} 
                   onChange={(e) => {
                   if(e.key==='enter')
                    e.preventDefault();
                    e.stopPropagation();setDbname(e.target.value)} }size="small" />


              <Button onClick={(e) =>  { e.preventDefault();
              e.stopPropagation();  renameDatabase(props.db.org_id?._id,props.db._id,props.db.name);} } 
              variant="contained" sx={{ width: '8rem',  backgroundColor: '#1C2833', fontSize: '12px', mx: 3, ':hover': 
                { bgcolor: '#273746', color: 'white', border: 0, borderColor: '#1C2833', } }}>
                    Rename
               </Button> 
                        
            </>):

            (<>
                
                <Typography sx={{ fontWeight: 'bold' }}>{props.db.name} </Typography>

          < Box sx={{ mt: -1 }}>
              <Dropdown first={"Rename Database"} second={"Delete Database"} setName={setName}  idToDelete={props?.db?._id} deleteFunction={deletDatabases}/>
              </Box>
            
            </>)
            
              }
        </CardContent>
      </Link>
    </Card>
  )
}

SingleDatabase.propTypes = {
  db: PropTypes.shape({
    name: PropTypes.string,
    _id: PropTypes.string,
    org_id : PropTypes.any
    
  })
};
