import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import formReducer from './formSlice';
import productReducers from "./productsSlice"
const store  = configureStore({
    reducer:{
        cart : cartReducer,
        product:productReducers,
        form :formReducer
    }, 
});

export default store;