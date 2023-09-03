import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        //mutating the state here
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            console.log(action);
            state.items.filter((item, index) => {
                index !== action.payload
            });
        },
        clearCart: (state, action) => {
            // state.items = [];
            state.items.length = 0;
        }
    }
});


export const {
    addItem,
    removeItem,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;