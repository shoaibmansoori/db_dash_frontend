import { createSlice } from "@reduxjs/toolkit";

// // reducer imports
import { initialState, reducers ,extraReducers } from "./tableReducer";

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers,
  extraReducers
});

export const { addOptionToColumn, bulkAdd,deleteColumn,updateColumnHeader,addColumnToRight,addColumnToLeft,updateCell,addRow} = tableSlice.actions;

export default tableSlice.reducer;
