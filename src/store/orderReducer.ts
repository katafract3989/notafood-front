import {createAction, createReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product} from "../types/Restaurant";

const initialState: {order: Product[]} = {
    order: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProduct: (state, action:PayloadAction<Product>) => {
            state.order.push(action.payload)
        }
    }
})

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;

