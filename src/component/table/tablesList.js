import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PopupModal from '../popupModal';
import { createTable } from '../../api/tableApi';
import { getDbById } from '../../api/dbApi';
import PropTypes from "prop-types";
<<<<<<< HEAD
import MainTable from '../../table/mainTable';
import { addColumns, bulkAddColumns } from '../../store/table/tableThunk';
import { useDispatch } from "react-redux";

export default function TablesList (props ) {
  const [tables, setTables] = useState({});

  const dispatch=useDispatch();

 //state to display modal
 const [table, setTable] = useState();
 const [open, setOpen] = useState(false);
 const handleOpen = () => setOpen(true);


=======
import SingleTable from './singleTable';
import { useNavigate,useParams } from "react-router-dom";
export default function TablesList(props) {
  const [tables, setTables] = useState({});
  const navigate = useNavigate();
  const {tableName}=useParams()
  const sliderRef = useRef();
  const url = window.location.pathname;
  // state to display modal
  const [table, setTable] = useState();
  const [tableButton, setTableButton] = useState(false);
  const [clickedTable, setClickedTable] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  function onTableClicked(value) {
    navigate(`/db/${props?.dbData?.db?._id}/table/${value}`);
    setClickedTable(value);
    setTableButton(true);
  }
>>>>>>> 3026241893df574afa63f4177af6bf92cda3fe7e
  const saveTable = async (e) => {
    e.preventDefault();
    const dbId = props?.dbData?.db._id;
    const data = {
      tableName: table
    }
    await createTable(dbId, data);
    setOpen(false);
    getAllTableName(props?.dbData?.db?._id, props?.dbData?.db?.org_id?._id);
  };
  useEffect(() => {
<<<<<<< HEAD
   if(props?.dbData)
   getAllTableName(props?.dbData?.db?._id, props?.dbData?.db?.org_id?._id)
  },[props]);

  useEffect(()=>{
    dispatch(addColumns({
      // option: e.target.value,
      // backgroundColor: randomColor(),
      // columnId: id
    }))
  },[])

  const getAllTableName = async (dbId,orgId)=>{
    const data =  await getDbById(dbId,orgId)
      setTables(data.data.data.tables  || {});
     return data;
=======
    if (props?.dbData) {
      getAllTableName(props?.dbData?.db?._id, props?.dbData?.db?.org_id?._id);
      updateSliderDimensions();
    }
  }, [props]);
  useEffect(() => {
    onTableClicked(tableName)
  }, [url]);
  useEffect(() => {
    updateSliderDimensions();
  }, [tables]);
  const getAllTableName = async (dbId, orgId) => {
    const data = await getDbById(dbId, orgId)
    setTables(data.data.data.tables || {});
    return data;
  }
  let box = document.getElementById('slider');
  const updateSliderDimensions = () => {
    //let width = box.clientWidth;
  }
  const handleSliderLeft = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width
  }
  const handleSliderRight = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
>>>>>>> 3026241893df574afa63f4177af6bf92cda3fe7e
  }
  return (
<<<<<<< HEAD
         
      
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1px', flexWrap: 'wrap' }}>

      { Object.entries(tables).map((table, index) => (
        
        <Box
        onClick={() => { 
          dispatch(bulkAddColumns({
            "dbId":props.dbData.db._id,
            "tableName":table[0]
          }));
         }}
          key={index}
          sx={{
            p: '6px',
            borderRadius: '8px',
            border: '1px solid rgba(0, 0, 0, 0.2)',
            backgroundColor: '#fff',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            minWidth: '150px',
            maxWidth: '200px',
            width: '100%',
            textAlign: 'center',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}  
        >
           {table[0]}
           
           
         </Box>
         
      ))} 
      <Box
        sx={{
          borderRadius: '8px',
          backgroundColor: '#4caf50',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#388e3c',
          },
        }}
        
      >
      <Button onClick={handleOpen}  variant="contained" >Add Table</Button>
      <PopupModal title="create table" label="Table Name"   open={open} setOpen ={setOpen} saveFunction = {saveTable}  setVariable={setTable}/>
      </Box>
      <MainTable/>
    </Box>
    
=======
    <>
    <div style={{width: "100%", display: "flex",height:"33px"}}>
     <Button onClick={handleSliderLeft} >
          {'<'}
        </Button>
      <Box id='slider' ref={sliderRef} sx={{ display: 'flex' , overflow: 'hidden',width:"92%" }}>
        {Object.entries(tables).map((table, index) => (
          <Box
            key={index}
            sx={{
              p: '5px',
              borderRadius: '2px',
              border: '1px solid rgba(0, 0, 0, 0.2)',
              backgroundColor: '#fff',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              minWidth: '75px',
              maxWidth: '100px',
              textAlign: 'center',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              transition: 'transform 0.2s ease-in-out',
              //transform: translateX(-${sliderOffset}px),
            }}
            onClick={() => onTableClicked(table[0])}
          >
            {table[0]}
          </Box>
        ))}
      </Box>
      <Button onClick={handleSliderRight} >
          {'>'}
        </Button>
      <Button onClick={handleOpen} variant="contained" >
        AddTable
      </Button> </div>
      <PopupModal title="create table" label="Table Name" open={open} setOpen={setOpen} saveFunction={saveTable} setVariable={setTable} />
      {/* {/ Buttons for sliding tables */}
      <Box>
        {tableButton ? (
          <SingleTable table={clickedTable} />
        ) : (
          <h1></h1>
        )}
      </Box>
    </>
>>>>>>> 3026241893df574afa63f4177af6bf92cda3fe7e
  );
}
TablesList.propTypes = {
  dbData: PropTypes.any,
  table: PropTypes.string,
  dbId: PropTypes.string,
  orgId: PropTypes.string,
};