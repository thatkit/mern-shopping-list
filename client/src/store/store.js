import { configureStore } from "@reduxjs/toolkit";
import shoppingListSliceReducer from '../components/ShoppingList/shoppingListSlice';

export default configureStore({
    reducer: {
        shoppingList: shoppingListSliceReducer
    }
});