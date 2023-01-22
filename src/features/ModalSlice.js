import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    displayCreateNoteModal : false,
    displayEditTagModal : false,
    displaySelectTagModal : false,
    displayFilterModal : false
}

const modalSlice = createSlice({
    name : "modal",
    initialState,
    reducers : {
        toggleNoteModal : (state, {payload}) => {
            state.displayCreateNoteModal = payload;
        },

        toggleTagModal: (state, action) => {
            const {type, value} = action.payload;
            if(type === "edit"){
                state.displayEditTagModal = value;
                return ;
            } 
            state.displaySelectTagModal = value;
        },
        toggleFilterModal : (state, action) => {
            state.displayFilterModal = action.payload;
        }
    }
});

export const {toggleTagModal, toggleFilterModal, toggleNoteModal} = modalSlice.actions;
export default modalSlice.reducer ;
