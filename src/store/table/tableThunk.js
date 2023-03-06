import { createAsyncThunk } from "@reduxjs/toolkit";
import { createField, deleteField, getAllfields } from "../../api/fieldApi";
import { getTable } from "../../api/tableApi";

// reducer imports
import { addColumnToLeft, addColumnToRight, addOptionToColumn,addRow,deleteColumn,updateCell,updateColumnHeader, updateColumnType} from "./tableSlice";
const getHeaders = async(dbId,tableName) =>{
    const fields = await getAllfields(dbId,tableName);
    console.log("getHeaders",fields)
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
    console.log("field",field)
       var json = {
           id: "",
        label: "",
        accessor: "",
        minWidth: 100,
        dataType: "",
        options: []
    }
    json.id = field[0];
    json.label = json.accessor = field[1]?.name?.toLowerCase() || field[0]?.toLowerCase();
    json.dataType = field[1]?.fieldType
    columns.push (json);
    console.log("json",json)
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
        console.log("addColumns")
        dispatch(addOptionToColumn(payload));
        return 5;
    }
) ;

export const bulkAddColumns = createAsyncThunk(
    "table/bulkAddColumns",
    async (payload) =>{      
        console.log("thunkkkkk")
        const columns =  await getHeaders(payload.dbId,payload.tableName)
        console.log("grfvd",columns)
        const data = await getTable(payload.dbId,payload.tableName)
        const dataa = {
            "columns":columns,
            "row":data.data.data.tableData,
            "tableId":payload.tableName,
            "dbId":payload.dbId
        }
        return dataa;
    }
) ;

export const deleteColumns = createAsyncThunk(
    "table/deleteColumns",
    async(payload,{dispatch})=>{
        console.log("deleteColumns",payload) 
        const dataa = await deleteField(payload?.dbId,payload?.tableId,payload?.fieldName)
        console.log(dataa);
        //delte api call 
            dispatch(deleteColumn(payload));
        return 2;
        // return response of api;
    }
)
export const updateColumnHeaders = createAsyncThunk(
    "table/updateColumnHeaders",
    async(payload,{dispatch})=>{
        console.log("updateColumnHeaders")

        dispatch(updateColumnHeader(payload));
        return 2;
    }
)

export const addColumnsToRight = createAsyncThunk(
    "table/addColumnsToRight",
    async(payload,{dispatch})=>{
        console.log("addColumnsToRight")

        dispatch(addColumnToRight(payload));
        return payload;
    }
)

export const addColumsToLeft = createAsyncThunk(
    "table/addColumsToLeft",
    async(payload,{dispatch})=>{
        console.log("addColumsToLeft",payload)
        const data={
            fieldName:payload?.fieldName,
            fieldType:payload?.fieldType
        }
        const addField = await createField(payload?.dbId,payload?.tableId,data);
        console.log("addField",addField)
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