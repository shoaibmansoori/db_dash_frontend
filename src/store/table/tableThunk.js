import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllfields } from "../../api/fieldApi";
import { getTable } from "../../api/tableApi";
import makeData from "../../table/makeData"

// reducer imports
import { addColumnToLeft, addColumnToRight, addOptionToColumn,addRow,deleteColumn,updateCell,updateColumnHeader, updateColumnType} from "./tableSlice";
const getHeaders = async(dbId,tableName) =>{
    const fields = await getAllfields(dbId,tableName);
    let columns = [
        {
            id: 9999991,
            width: 100,
            label: "checkbox",
            disableResizing: true,
            dataType: "checkbox",
            accessor : "checkbox",
        },
    ]
   
   Object.entries(fields.data.data.fields).forEach( (field) =>{
    var json = {
        id: "",
        label: "",
        accessor: "",
        minWidth: 100,
        dataType: "",
        options: []
    }
        json.id = field[0];
        json.label = json.accessor = field[1].name;
        json.dataType = field[1].fieldType
        columns.push (json);
    }
    )
    columns.push({
             id: 999999,
             width: 20,
             label: "+",
             disableResizing: true,
             dataType: "null"
    })
    return columns;
}
export const addColumns = createAsyncThunk(
    "table/addColumns",
    async (payload,{dispatch}) =>{
        // console.log("thunk",payload)
        dispatch(addOptionToColumn(payload));
        return 5;
    }
) ;

export const bulkAddColumns = createAsyncThunk(
    "table/bulkAddColumns",
    async (payload) =>{      
        console.log("thunk",payload)
        const makeDataa = makeData(5)
        console.log(makeDataa)
        const columns =  await getHeaders(payload.dbId,payload.tableName)
        const data = await getTable(payload.dbId,payload.tableName)
        console.log(data.data.data.tableData)
        const dataa = {
            "columns":columns,
            "row":data.data.data.tableData
        }
        // dispatch(bulkAdd(payload));  
        return dataa;
    }
) ;

export const deleteColumns = createAsyncThunk(
    "table/deleteColumns",
    async(payload,{dispatch})=>{
        console.log("in dlete colujns")
        //delte api call 
        dispatch(deleteColumn(payload));
        // return response of api;
    }
)
export const updateColumnHeaders = createAsyncThunk(
    "table/updateColumnHeaders",
    async(payload,{dispatch})=>{
        dispatch(updateColumnHeader(payload));
        return 2;
    }
)

export const addColumnsToRight = createAsyncThunk(
    "table/addColumnsToRight",
    async(payload,{dispatch})=>{
        dispatch(addColumnToRight(payload));
        return payload;
    }
)

export const addColumsToLeft = createAsyncThunk(
    "table/addColumsToLeft",
    async(payload,{dispatch})=>{
        dispatch(addColumnToLeft(payload));
        return payload;
    }
)

export const updateCells = createAsyncThunk(
    "table/updateCells",
    async(payload,{dispatch})=>{
        dispatch(updateCell(payload));
        return payload;
    }
)

export const addRows = createAsyncThunk(
    "table/addRows",
    async(payload,{dispatch})=>{
        
        dispatch(addRow(payload));
        return payload;
    }
)

export const updateColumnsType = createAsyncThunk(
    "table/updateColumnsType",
    async(payload,{dispatch})=>{
        
        dispatch(updateColumnType(payload));
        return payload;
    }
)