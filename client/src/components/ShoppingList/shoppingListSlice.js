import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

export const shoppingListSlice = createSlice({
    name: 'items',
    initialState: [
        { id: uuid(), name: 'Meat' },
        { id: uuid(), name: 'Veggies' },
        { id: uuid(), name: 'Choco' },
        { id: uuid(), name: 'Milk' }
    ],
    reducers: {
        addItem: (state, action) => {
            return [...state, action.payload];
        },
        deleteItem: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        }
    }
});

export const { addItem, deleteItem } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;