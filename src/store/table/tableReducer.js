import { current } from '@reduxjs/toolkit';
import { addColumns, addColumnsToRight, bulkAddColumns,updateCells,addRows, deleteColumns, updateColumnHeaders,addColumsToLeft } from './tableThunk.js';
import { shortId } from "../../table/utils";


export const initialState = {
  columns: [],
  data: [],
  skipReset: false,
  status: "idle",
};

export const reducers = {
  addOptionToColumn(state, payload) {
    const action = payload.payload;
    if (action) {
      var optionIndex = state.columns.findIndex(
        (column) => column.id === action.columnId
      );

      state.columns = [
        ...state.columns.slice(0, optionIndex),
        {
          ...state.columns[optionIndex],
          options: [
            ...state.columns[optionIndex].options,
            { label: action.option, backgroundColor: action.backgroundColor }
          ]
        },
        ...state.columns.slice(optionIndex + 1, state.columns.length)
      ];

      state.skipReset = true;
    }
    console.log(current(state));
  },

  //   bulkAdd(state,payload){
  //     if(payload.payload){
  //         state.columns=[...payload.payload.columns];
  //         state.data=[...payload.payload.data];
  //     }
  //     console.log(current(state));
  //   }
  deleteColumn(state, payload) {
    const action = payload.payload;
    if (action) {
      var deleteIndex = state.columns.findIndex(
        (column) => column.id === action.columnId
      );
    }
    return {
      ...state,
      skipReset: true,
      columns: [
        ...state.columns.slice(0, deleteIndex),
        ...state.columns.slice(deleteIndex + 1, state.columns.length)
      ]
    };
  },
  updateColumnHeader(state, payload) {
    const action = payload.payload;
    if (action) {
      var index = state.columns.findIndex(
        (column) => column.id === action.columnId
      );
    }
    return {
      ...state,
      skipReset: true,
      columns: [
        ...state.columns.slice(0, index),
        { ...state.columns[index], label: action.label },
        ...state.columns.slice(index + 1, state.columns.length)
      ]
    };
  },
  addColumnToRight(state, payload) {
    const action = payload.payload;
    if (action) {
      var rightIndex = state.columns.findIndex(
        (column) => column.id === action.columnId
      );
    }
    var rightId = shortId();
    return {
      ...state,
      skipReset: true,
      columns: [
        ...state.columns.slice(0, rightIndex + 1),
        {
          id: rightId,
          label: "Column",
          accessor: rightId,
          dataType: "text",
          created: action.focus && true,
          options: []
        },
        ...state.columns.slice(rightIndex + 1, state.columns.length)
      ]
    };
  },
  addColumnToLeft(state,payload){
    const action = payload.payload;
    if(action)
    {
      var leftIndex = state.columns.findIndex(
           (column) => column.id === action.columnId
         );
    }
        var leftId = shortId();
        return {
          ...state,
          skipReset: true,
          columns: [
            ...state.columns.slice(0, leftIndex),
            {
              id: leftId,
              label: "Column",
              accessor: leftId,
              dataType: "text",
              created: action.focus && true,
              options: []
            },
            ...state.columns.slice(leftIndex, state.columns.length)
          ]
        };
  },
  updateTableData(state,payload){

    return  {
      ...state ,data : payload.payload
    }
  },
  updateCell(state,payload)
  {
    const action = payload.payload
    return {
      ...state,
      skipReset: true,
      data: state.data.map((row, index) => {
        if (index === action.rowIndex) {
          return {
            ...state.data[action.rowIndex],
            [action.columnId]: action.value
          };
        }
        return row;
      })
    };
  },
  addRow(state){
    return {
      ...state,
      skipReset: true,
      data: [...state.data, {}]
    };
  },

        
}



export function extraReducers(builder) {
  builder
    //   add columns
    .addCase(addColumns.pending, (state) => {

      state.status = "loading"
    })
    .addCase(addColumns.fulfilled, (state) => {

      state.status = "succeeded";

    })
    .addCase(addColumns.rejected, (state) => {
      
      state.status = "failed";
      // initial data ka call 
        // bulk add call 
      // MDBToast.error("Unable to fetch jamaats.");
    })

    .addCase(bulkAddColumns.pending, (state) => {
      state.status = "loading"
    })
    .addCase(bulkAddColumns.fulfilled, (state, action) => {
      console.log("action", action.payload.columns)
      if (action.payload) {
        state.columns = action.payload.columns;
        state.data = action.payload.data;
      }
      state.status = "succeeded";

    })
    .addCase(bulkAddColumns.rejected, (state) => {
      state.status = "failed";
      // MDBToast.error("Unable to fetch jamaats.");
    })

    .addCase(deleteColumns.pending, (state) => {
      state.status = "loading"
    })
    .addCase(deleteColumns.fulfilled, (state) => {
      state.status = "succeeded";

    })
    .addCase(deleteColumns.rejected, (state) => {
      state.status = "failed";
      // MDBToast.error("Unable to fetch jamaats.");
    })

    //for update column header
    .addCase(updateColumnHeaders.pending, (state) => {
      state.status = "loading"
    })
    .addCase(updateColumnHeaders.fulfilled, (state) => {
      state.status = "succeeded";

    })
    .addCase(updateColumnHeaders.rejected, (state) => {
      state.status = "failed";
      // MDBToast.error("Unable to fetch jamaats.");
    })


    // for add column to right
    .addCase(addColumnsToRight.pending, (state) => {
      state.status = "loading"
    })
    .addCase(addColumnsToRight.fulfilled, (state) => {

      state.status = "succeeded";

    })
    .addCase(addColumnsToRight.rejected, (state) => {
      state.status = "failed";
      // MDBToast.error("Unable to fetch jamaats.");
    })


    .addCase(addColumsToLeft.pending, (state) => {
      state.status = "loading"
    })
    .addCase(addColumsToLeft.fulfilled, (state) => {
      state.status = "succeeded";

    })
    .addCase(addColumsToLeft.rejected, (state) => {
      state.status = "failed";
      // MDBToast.error("Unable to fetch jamaats.");
    })

    .addCase(updateCells.pending, (state) => {
      state.status = "loading"
    })
    .addCase(updateCells.fulfilled, (state) => {
      state.status = "succeeded";

    })
    .addCase(updateCells.rejected, (state) => {
      state.status = "failed";
      // MDBToast.error("Unable to fetch jamaats.");
    })

    .addCase(addRows.pending, (state) => {
      state.status = "loading"
    })
    .addCase(addRows.fulfilled, (state) => {
      state.status = "succeeded";

    })
    .addCase(addRows.rejected, (state) => {
      state.status = "failed";
      // MDBToast.error("Unable to fetch jamaats.");
    })
}
