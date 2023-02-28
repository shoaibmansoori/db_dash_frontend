import React,{useState} from 'react'
import { Card, CardContent, Typography, Box,TextField} from '@mui/material'
import Button from '@mui/material/Button';
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import Dropdown from '../dropdown'
import { renameDb } from '../../api/dbApi'

export default function SingleDatabase(props) {
  // useEffect(()=>{
  //     console.log("props",props)
  //   },[])
    

  const [name, setName] = useState(false)
  const [dbname,setDbname ] = useState()
  // const [open, setOpen] = useState(false);
  const handleOpen = () => {
       setName(false);
  }
  const renameDatabase = async (orgId,id,name) =>{
   

    const data = {
          name  : dbname||name
    }
     await renameDb(orgId,id,data)
        
};

    
  return (
      <Link to={{ pathname: "/db/" + props.db._id}}  state = {{db: props.db}}>
    <Card sx={{ minWidth: 250, minHeight: 200, boxShadow: 2 }}>
        <CardContent sx={{ display:"flex" }} >

         
            { name?
            (<>
                  <TextField
                  onBlur={handleOpen}
                   autoFocus sx={{ width: 120,fontWeight: 'bold' }} defaultValue={props.db.name} value ={ dbname} 
                   onChange={(e) => {
                    e.preventDefault();
                    e.stopPropagation();setDbname(e.target.value)} }size="small" />


              <Button onClick={(e) =>  { e.preventDefault();
              e.stopPropagation(); 
              setName(false);
              renameDatabase(props.db.org_id?._id,props.db._id,props.db.name);} } 
              variant="contained" sx={{ width: '8rem',  backgroundColor: '#1C2833', fontSize: '12px', mx: 3, ':hover': 
                { bgcolor: '#273746', color: 'white', border: 0, borderColor: '#1C2833', } }}>
                    Rename
               </Button> 
                        
            </>):

            (<>
                
                <Typography sx={{ fontWeight: 'bold' }}>{props.db.name} </Typography>

          < Box sx={{ mt: -1 }}>
              <Dropdown first={"Rename Database"} second={"Delete Database"} setName={setName} />
              </Box>
            
            </>)
            
              }
        </CardContent>
    </Card>
      </Link>
  )
}

SingleDatabase.propTypes = {
  db: PropTypes.shape({
    name: PropTypes.string,
    _id: PropTypes.string,
    org_id : PropTypes.any
    
  })
};
