import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const appStore = configureStore({
    // This is the reducer for our whole redux store.
    reducer: {
        cart: cartSlice
    }
});

export default appStore;