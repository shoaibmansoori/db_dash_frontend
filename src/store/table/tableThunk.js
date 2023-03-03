import { createAsyncThunk } from "@reduxjs/toolkit";


// reducer imports
import { addColumnToLeft, addOptionToColumn,addRow,deleteColumn,updateCell,updateColumnHeader} from "./tableSlice";

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
        // dispatch(bulkAdd(payload));  
        return payload;
    }
) ;

export const deleteColumns = createAsyncThunk(
    "table/deleteColumns",
    async(payload,{dispatch})=>{
        dispatch(deleteColumn(payload));
        return 2;
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
    async(payload)=>{
        // dispatch(addColumnsToRight(payload));
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