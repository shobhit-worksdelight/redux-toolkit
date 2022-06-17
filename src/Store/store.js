import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import productReducers from "./productsSlice"
const store  = configureStore({
    reducer:{
        cart : cartReducer,
        product:productReducers,
    }, 
});

export default store;