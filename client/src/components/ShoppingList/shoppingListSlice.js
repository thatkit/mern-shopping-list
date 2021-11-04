import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

const loadItems = createAsyncThunk(
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
        items: [
            { id: uuid(), name: 'Meat' },
            { id: uuid(), name: 'Veggies' },
            { id: uuid(), name: 'Choco' },
            { id: uuid(), name: 'Milk' }
        ],
        // isLoading: ,
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
                items: state.items.filter(item => item.id !== action.payload)
            };
        }
    },
    // extraReducers: {
    //     [loadItems.fulfilled]: (state, action) => ({
    //         state.loading = true;
            
    //     })
    // }
});

export const { addItem, deleteItem } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;