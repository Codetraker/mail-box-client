import { createSlice } from "@reduxjs/toolkit";

const composerDisplaySlice = createSlice({
    name:'composerDisplay',
    initialState : {composerIsVisible : false},
    reducers : {
        openComposer(state){
            state.composerIsVisible = true;
        },
        closeComposer(state){
            state.composerIsVisible = false;
        }
    }
});

export const composerDisplayAction = composerDisplaySlice.actions;

export default composerDisplaySlice;