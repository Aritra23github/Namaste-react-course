import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        // This reducer will only maintain cart slice.
        //mutating the state here
        addItem: (state, action) => {
            state.cartItems.push(action.payload);
        },
        removeItem: (state, action) => {
            console.log(action);
            state.cartItems.filter((item, index) => {
                index !== action.payload
            });
        },
        clearCart: (state, action) => {
            // state.cartItems = [];
            state.cartItems.length = 0;
        }
    }
});


//Here the addItem, removeItem, clearCart all of these are actions and all the functions which is related to this actions are reducers.

export const {
    addItem,
    removeItem,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;