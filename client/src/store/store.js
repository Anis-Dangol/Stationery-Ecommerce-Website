import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import { AdminProductsSlice } from "./admin/products-slice/index.js";
import adminOrderSlice from "./admin/order-slice";
import { shoppingProductsSlice } from "./shop/products-slice";
import shopCartSlice from "./shop/cart-slice";
import shopAddressSlice from "./shop/address-slice";
import shopOrderSlice from "./shop/order-slice";
import shopSearchSlice from "./shop/search-slice";
import shopReviewSlice from "./shop/review-slice";
import commonFeatureSlice from "./common-slice";



const store = configureStore({
    reducer: {
        auth: authReducer,

        adminProducts: AdminProductsSlice.reducer,  // added.reducer to show the images in the admin panel
        adminOrder : adminOrderSlice,

        shopProducts: shoppingProductsSlice.reducer,
        shopCart: shopCartSlice,
        shopAddress: shopAddressSlice,
        shopOrder: shopOrderSlice,
        shopSearch: shopSearchSlice,
        shopReview: shopReviewSlice,
        commonFeature: commonFeatureSlice,
    },
});

export default store;