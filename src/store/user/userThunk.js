import { createAsyncThunk } from "@reduxjs/toolkit";
import { add , remove} from "./userSlice";
import { getCurrentUser } from "../../api/userApi";



export const saveUser = createAsyncThunk (
    "user/saveUser", async (payload , {dispatch}) =>{
        console.log("o=in thulkk")
        const data = await getCurrentUser();
        console.log("get current user",data)
        dispatch(add(data.data.data));
        return 5;
    }
);


export const removeUser = createAsyncThunk (
    "user/removeUser", async (_payload , {dispatch}) =>{
        dispatch(remove());
        return 5;
    }
);