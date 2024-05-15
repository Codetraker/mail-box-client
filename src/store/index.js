import { configureStore } from "@reduxjs/toolkit";
import composerDisplaySlice from "./composerDisplaySlice";

const store = configureStore({
    reducer:{
        composerVisible : composerDisplaySlice.reducer ,
    }
});

export default store;