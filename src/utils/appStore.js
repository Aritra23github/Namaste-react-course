import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cartReducer: cartSlice
    }
});

export default appStore;