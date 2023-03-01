import { createAsyncThunk } from "@reduxjs/toolkit";
import { add , remove} from "./userSlice";


export const saveUser = createAsyncThunk (
    "user/saveUser", async (payload , {dispatch}) =>{
        dispatch(add(payload.user));
        return 5;
    }
);


export const removeUser = createAsyncThunk (
    "user/removeUser", async (_payload , {dispatch}) =>{
        dispatch(remove());
        return 5;
    }
);