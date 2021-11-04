import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// @action      loadItems
export const loadItems = createAsyncThunk(
    'items/loadItems',
    async (arg, thunkAPI) => {
        let response = await fetch('/api/items');
        response = await response.json();
        return response;
    }
);

// @action      addItem
export const addItem = createAsyncThunk(
    'items/addItem',
    async (item, thunkAPI) => {
        let response = await fetch('/api/items', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        });
        response = await response.json();
        return response;
    }
);

// @action      deleteItem
export const deleteItem = createAsyncThunk(
    'items/deleteItem',
    async (id, thunkAPI) => {
        let response = await fetch(`/api/items/${id}`, {
            method: 'DELETE'
        });
        response = await response.json();
        return response;
    }
);

export const shoppingListSlice = createSlice({
    name: 'items',
    initialState: {
        items: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        // @reducers      loadItems
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
        // @reducers      addItem
        [addItem.fulfilled]: (state, action) => {
            state.items.push(action.payload);
            state.isLoading = false;
            state.hasError = false;
        },
        [addItem.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [addItem.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
        // @reducers      deleteItem
        [deleteItem.fulfilled]: (state, action) => {
            state.items = state.items.filter(item => item._id !== action.payload.id);
            state.isLoading = false;
            state.hasError = false;
        },
        [deleteItem.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [deleteItem.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export default shoppingListSlice.reducer;