import { createAsyncThunk } from "@reduxjs/toolkit";


// reducer imports
import { addOptionToColumn,deleteColumn,updateColumnHeader} from "./tableSlice";

export const addColumns = createAsyncThunk(
    "table/addColumns",
    async (payload,{dispatch}) =>{
        // console.log("thunk",payload)
        console.log("in add option to column ")
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
        console.log("dkkjdsb")
        dispatch(deleteColumn(payload));
        return 2;
    }
)
export const updateColumnHeaders = createAsyncThunk(
    "table/updateColumnHeaders",
    async(payload,{dispatch})=>{
        console.log("dkkjdsb")
        dispatch(updateColumnHeader(payload));
        return 2;
    }
)

export const addColumnsToRight = createAsyncThunk(
    "table/addColumnsToRight",
    async(payload,{dispatch})=>{
        console.log("dkkjdsb")
        dispatch(addColumnsToRight(payload));
        return 2;
    }
)
