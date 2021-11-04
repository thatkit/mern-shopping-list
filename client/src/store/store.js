import { configureStore } from "@reduxjs/toolkit";
import shoppingListSliceReducer from '../components/ShoppingList/shoppingListSlice';
import loadingSliceReducer from '../components/ShoppingList/loadingSlice';

export default configureStore({
    reducer: {
        shoppingList: shoppingListSliceReducer,
        loading: loadingSliceReducer
    }
});