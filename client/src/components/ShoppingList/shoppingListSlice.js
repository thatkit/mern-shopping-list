import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadItems = createAsyncThunk(
    'items/loadItems',
    async (arg, thunkAPI) => {
        let items = await fetch('/api/items');
        items = await items.json();
        return items;
    }
);

export const shoppingListSlice = createSlice({
    name: 'items',
    initialState: {
        items: [],
        isLoading: false,
        hasError: false
    },
    reducers: {
        addItem: (state, action) => {
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        },
        deleteItem: (state, action) => {
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            };
        }
    },
    extraReducers: {
        [loadItems.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadItems.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadItems.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
    }
});

export const { addItem, deleteItem } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;