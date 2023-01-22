import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    isUpdate : false,
    note : {}
}

const appSlice = createSlice({
    name : "app",
    initialState,
    reducers : {
        setUpdateNote : (state, action) => {
            state.note = action.payload??{};
            state.isUpdate = true;
        },
        reset : (state) =>{
            state.isUpdate = false;
            state.note = {};
        }
    }
});


export const getAppState = state => state.app;


export const {setUpdateNote, reset} = appSlice.actions;
export default appSlice.reducer;