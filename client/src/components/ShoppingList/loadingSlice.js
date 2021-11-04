import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {
        loadItems: (state) => {
            return !state;
        }
    }
});

export const { loadItems } = loadingSlice.actions;

export default loadingSlice.reducer;