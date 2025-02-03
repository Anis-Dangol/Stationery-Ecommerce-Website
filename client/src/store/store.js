import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import { AdminProductsSlice } from "./admin/products-slice/index.js";
import { shoppingProductsSlice } from "./shop/products-slice";
import shopCartSlice from "./shop/cart-slice";



const store = configureStore({
    reducer: {
        auth: authReducer,
        adminProducts: AdminProductsSlice.reducer,  // added.reducer to show the images in the admin panel
        shopProducts: shoppingProductsSlice.reducer,
        shopCart: shopCartSlice,
    },
});

export default store;