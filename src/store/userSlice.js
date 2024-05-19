import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState : {user : null},
    reducers : {
        signIn(state,actions){
            state.user = actions.payload;
        }, 
        signOut(state){
            state.user = null;
        }
    }
});

export const userSliceAction = userSlice.actions;

export default userSlice;