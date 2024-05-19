import { configureStore } from "@reduxjs/toolkit";
import composerDisplaySlice from "./composerDisplaySlice";
import sidebarDisplaySlice from "./sidebarDisplaySlice";
import openmailSlice from "./openmailSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer:{
        userData : userSlice.reducer,
        composerVisible : composerDisplaySlice.reducer ,
        sidebarVisible : sidebarDisplaySlice.reducer,
        openMailData : openmailSlice.reducer,
    }
});

export default store;