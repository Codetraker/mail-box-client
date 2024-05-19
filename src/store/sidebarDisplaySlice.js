import { createSlice } from "@reduxjs/toolkit";

const sidebarDisplaySlice = createSlice({
    name : 'sidebarDisplay',
    initialState: {sidebarIsVisible : true, sidebarExpand : false},
    reducers : {
        changeSidebarDisplay(state){
            state.sidebarIsVisible = !state.sidebarIsVisible;
        },
        changeSidebarExpand(state){
            state.sidebarExpand = !state.sidebarExpand;
        }
    }
});

export const sidebarDisplayAction = sidebarDisplaySlice.actions;

export default sidebarDisplaySlice;