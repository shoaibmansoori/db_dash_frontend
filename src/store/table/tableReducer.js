// function reducer(state, action) {
//     switch (action.type) {
//       case "add_option_to_column":
//         var optionIndex = state.columns.findIndex(
//           (column) => column.id === action.columnId
//         );
//         return {
//           ...state,
//           skipReset: true,
//           columns: [
//             ...state.columns.slice(0, optionIndex),
//             {
//               ...state.columns[optionIndex],
//               options: [
//                 ...state.columns[optionIndex].options,
//                 { label: action.option, backgroundColor: action.backgroundColor }
//               ]
//             },
//             ...state.columns.slice(optionIndex + 1, state.columns.length)
//           ]
//         };
//       case "add_row":
//         return {
//           ...state,
//           skipReset: true,
//           data: [...state.data, {}]
//         };
//       case "update_column_type":
//         var typeIndex = state.columns.findIndex(
//           (column) => column.id === action.columnId
//         );
//         switch (action.dataType) {
//           case "number":
//             if (state.columns[typeIndex].dataType === "number") {
//               return state;
//             } else {
//               return {
//                 ...state,
//                 columns: [
//                   ...state.columns.slice(0, typeIndex),
//                   { ...state.columns[typeIndex], dataType: action.dataType },
//                   ...state.columns.slice(typeIndex + 1, state.columns.length)
//                 ],
//                 data: state.data.map((row) => ({
//                   ...row,
//                   [action.columnId]: isNaN(row[action.columnId])
//                     ? ""
//                     : Number.parseInt(row[action.columnId])
//                 }))
//               };
//             }
//           case "select":
//             if (state.columns[typeIndex].dataType === "select") {
//               return {
//                 ...state,
//                 columns: [
//                   ...state.columns.slice(0, typeIndex),
//                   { ...state.columns[typeIndex], dataType: action.dataType },
//                   ...state.columns.slice(typeIndex + 1, state.columns.length)
//                 ],
//                 skipReset: true
//               };
//             } else {
//               let options = [];
//               state.data.forEach((row) => {
//                 if (row[action.columnId]) {
//                   options.push({
//                     label: row[action.columnId],
//                     backgroundColor: randomColor()
//                   });
//                 }
//               });
//               return {
//                 ...state,
//                 columns: [
//                   ...state.columns.slice(0, typeIndex),
//                   {
//                     ...state.columns[typeIndex],
//                     dataType: action.dataType,
//                     options: [...state.columns[typeIndex].options, ...options]
//                   },
//                   ...state.columns.slice(typeIndex + 1, state.columns.length)
//                 ],
//                 skipReset: true
//               };
//             }
//           case "text":
//             if (state.columns[typeIndex].dataType === "text") {
//               return state;
//             } else if (state.columns[typeIndex].dataType === "select") {
//               return {
//                 ...state,
//                 skipReset: true,
//                 columns: [
//                   ...state.columns.slice(0, typeIndex),
//                   { ...state.columns[typeIndex], dataType: action.dataType },
//                   ...state.columns.slice(typeIndex + 1, state.columns.length)
//                 ]
//               };
//             } else {
//               return {
//                 ...state,
//                 skipReset: true,
//                 columns: [
//                   ...state.columns.slice(0, typeIndex),
//                   { ...state.columns[typeIndex], dataType: action.dataType },
//                   ...state.columns.slice(typeIndex + 1, state.columns.length)
//                 ],
//                 data: state.data.map((row) => ({
//                   ...row,
//                   [action.columnId]: row[action.columnId] + ""
//                 }))
//               };
//             }
//           default:
//             return state;
//         }
//       case "update_column_header":
//         var index = state.columns.findIndex(
//           (column) => column.id === action.columnId
//         );
//         return {
//           ...state,
//           skipReset: true,
//           columns: [
//             ...state.columns.slice(0, index),
//             { ...state.columns[index], label: action.label },
//             ...state.columns.slice(index + 1, state.columns.length)
//           ]
//         };
//       case "update_cell":
   
//         return {
//           ...state,
//           skipReset: true,
//           data: state.data.map((row, index) => {
//             if (index === action.rowIndex) {
//               return {
//                 ...state.data[action.rowIndex],
//                 [action.columnId]: action.value
//               };
//             }
//             return row;
//           })
//         };
//       case "add_column_to_left":
//         var leftIndex = state.columns.findIndex(
//           (column) => column.id === action.columnId
//         );
//         var leftId = shortId();
//         return {
//           ...state,
//           skipReset: true,
//           columns: [
//             ...state.columns.slice(0, leftIndex),
//             {
//               id: leftId,
//               label: "Column",
//               accessor: leftId,
//               dataType: "text",
//               created: action.focus && true,
//               options: []
//             },
//             ...state.columns.slice(leftIndex, state.columns.length)
//           ]
//         };
//       case "add_column_to_right":
//         var rightIndex = state.columns.findIndex(
//           (column) => column.id === action.columnId
//         );
//         var rightId = shortId();
//         return {
//           ...state,
//           skipReset: true,
//           columns: [
//             ...state.columns.slice(0, rightIndex + 1),
//             {
//               id: rightId,
//               label: "Column",
//               accessor: rightId,
//               dataType: "text",
//               created: action.focus && true,
//               options: []
//             },
//             ...state.columns.slice(rightIndex + 1, state.columns.length)
//           ]
//         };
//       case "delete_column":
//         var deleteIndex = state.columns.findIndex(
//           (column) => column.id === action.columnId
//         );
//         return {
//           ...state,
//           skipReset: true,
//           columns: [
//             ...state.columns.slice(0, deleteIndex),
//             ...state.columns.slice(deleteIndex + 1, state.columns.length)
//           ]
//         };
//       case "enable_reset":
//         return {
//           ...state,
//           skipReset: false
//         };
//       default:
//         return state;
//     }
//   }

import { current } from '@reduxjs/toolkit';
import {addColumns, addColumnsToRight, bulkAddColumns,deleteColumns, updateColumnHeaders} from './tableThunk.js';
import {  shortId } from "../../table/utils";



export const initialState = {
    columns: [],
    data:[],
    skipReset:false,
    status: "idle",
};

export const reducers ={
    addOptionToColumn(state,payload){
        const action=payload.payload;
        if(action){
            var optionIndex = state.columns.findIndex(
                (column) => column.id === action.columnId
            );
            
            state.columns=[
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
              
            state.skipReset=true;
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
    deleteColumn(state,payload){
      const action=payload.payload;
      if(action)
      {
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
    updateColumnHeader(state,payload)
    {     
      const action = payload.payload;
      if(action){
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
      addColumnToRight(state,payload){
        const action = payload.payload;
        if(action){
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
      }
}



export function extraReducers(builder) {
    builder
    //   add columns
      .addCase(addColumns.pending, (state) => {

        state.status ="loading"
      })
      .addCase(addColumns.fulfilled, (state) => {

        state.status = "succeeded";

      })
      .addCase(addColumns.rejected, (state) => {
        state.status = "failed";
        // MDBToast.error("Unable to fetch jamaats.");
      })

      .addCase(bulkAddColumns.pending, (state) => {
        state.status ="loading"
      })
      .addCase(bulkAddColumns.fulfilled, (state,action) => {
        console.log("action",action.payload.columns)
        if(action.payload){
            state.columns=[...action.payload.columns];
            state.data=[...action.payload.data];
        }
        state.status = "succeeded";

      })
      .addCase(bulkAddColumns.rejected, (state) => {
        state.status = "failed";
        // MDBToast.error("Unable to fetch jamaats.");
      })

      .addCase(deleteColumns.pending, (state) => {
        state.status ="loading"
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
        state.status ="loading"
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
      state.status ="loading"
      })
      .addCase(addColumnsToRight.fulfilled, (state) => {
        state.status = "succeeded";

      })
      .addCase(addColumnsToRight.rejected, (state) => {
        state.status = "failed";
        // MDBToast.error("Unable to fetch jamaats.");
      })

  }
  