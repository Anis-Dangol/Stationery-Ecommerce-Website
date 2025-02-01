import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import { AdminProductsSlice } from "./admin/products-slice/index.js";


const store = configureStore({
    reducer: {
        auth: authReducer,
        adminProducts: AdminProductsSlice.reducer,  // added.reducer to show the images in the admin panel
    },
});

export default store;