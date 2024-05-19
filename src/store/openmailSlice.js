import { createSlice } from "@reduxjs/toolkit";

const openmailSlice = createSlice({
    name : "openMail",
    initialState : {mailData : null},
    reducers : {
        openMessage(state,actions){
            state.mailData = actions.payload;
        }
    }
});

export const openMailAction = openmailSlice.actions;

export default openmailSlice;