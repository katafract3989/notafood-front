import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product, OrderProduct} from "../types/Restaurant";

const initialState: { order: OrderProduct[], finalPrice: number } = {
    order: [],
    finalPrice: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {

            const product = state.order.find((item: OrderProduct) => item.id === action.payload.id)

            if (product) {
                product.quantity = product.quantity + 1
                product.totalPrice = product.price * product.quantity
            } else {
                state.order.push({...action.payload, quantity: 1, totalPrice: action.payload.price})
            }

        },

        increaseQuantity: (state, action: PayloadAction<number>) => {
            const product = state.order.find((item: OrderProduct) => item.id === action.payload)
            if (product) {
                product.quantity = product.quantity + 1
                product.totalPrice = product.price * product.quantity
            }
        },

        reduceQuantity: (state, action: PayloadAction<number>) => {
            const product = state.order.find((item: OrderProduct) => item.id === action.payload)
            if (product) {
                product.quantity = product.quantity - 1
                product.totalPrice = product.price * product.quantity
            }
            if (product?.quantity === 0) {
                state.order = state.order.filter((item: OrderProduct) => item.id !== action.payload)
            }
        },

        recalculationFinalPrice: (state) => {
            state.finalPrice = 0;
            state.order.forEach(item => state.finalPrice += item.totalPrice)
        },

        orderClear: (state) => {
            state.order = []
            state.finalPrice = 0
        }
    }
})

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;

