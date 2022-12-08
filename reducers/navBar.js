import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openBox: false,
    title: ''
}

export const navBarSlice = createSlice({
    name: 'navBar',
    initialState,
    reducers:{
        setOpenBox: (state, action) => {
            state.openBox = action.payload.open
            state.title = action.payload.title || ''
        }
    }
})

export const {
    setOpenBox,
} = navBarSlice.actions

export default navBarSlice.reducer