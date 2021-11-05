import { configureStore } from "@reduxjs/toolkit";
import shoppingListSliceReducer from './shoppingListSlice';

export default configureStore({
    reducer: {
        shoppingList: shoppingListSliceReducer
    }
});