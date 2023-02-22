import React,{ useState} from 'react'
import Dropdown from '../dropdown';
import Button from '@mui/material/Button';
import PopupModal from '../popupModal';
import { Box, Typography, TextField } from '@mui/material'
import SingleDatabase from './singleDatabase';


export const OrgList = () => {
    const [name, setName] = useState(false)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    return (
        <>
            <Box sx={{ my: 7 ,display :"flex"} }>
                {name ?
                    (
                        <>
                            {/* <TextField id="outlined-basic" variant="outlined" /> */}
                            <TextField sx={{ width: 12000, fontWeight: 'bold' }} defaultValue="WorkSpace1" size="small" />
                            <Typography sx={{ fontWeight: 'bold', cursor: 'pointer', margin: 1 }}>Rename</Typography>
                        </>
                    ) :
                    (
                        <>
                            <Typography onClick={() => { setName(true) }} sx={{ fontWeight: 'bold' }}>Workspace 1</Typography>
                            <Box sx={{ mt: -1 }}>
                                <Dropdown first={"Rename workspace"} second={"Delete workspace"} setName={setName} />
                            </Box>
                        </>
                    )}


            </Box>
            <Box sx={{  display:"flex"}}>

                <Box sx={{ mx: 2 }}>
                    <SingleDatabase />
                </Box>

                <Box>
                    <Button onClick={handleOpen} variant="contained">Create Db</Button>
                    <PopupModal title="create Database" open={open} setOpen={setOpen} label="Database Name"  />
                </Box>

            </Box>
        </>
    )
}
