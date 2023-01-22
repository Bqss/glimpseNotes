import {configureStore} from "@reduxjs/toolkit";
import {noteApi} from "./api/services/noteApi";
import {tagApi} from "./api/services/tagApi";
import modalSlice from "./features/ModalSlice";
import appSlice from "./features/appSlice";

import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store =  configureStore({
    reducer : {
        modal : modalSlice,
        [tagApi.reducerPath] : tagApi.reducer,
        [noteApi.reducerPath] : noteApi.reducer,
        app : appSlice
    },
    middleware: (getDefaultMiddleware) =>[...getDefaultMiddleware(), noteApi.middleware, tagApi.middleware],

})
export default store;

setupListeners(store.dispatch)
