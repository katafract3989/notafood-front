import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product, CartProduct} from "../types/Restaurant";

const initialState: { cart: CartProduct[], finalPrice: number } = {
    cart: [],
    finalPrice: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {

            const product = state.cart.find((item: CartProduct) => item.id === action.payload.id)

            if (product) {
                product.quantity = product.quantity + 1
                product.totalPrice = product.price * product.quantity
            } else {
                state.cart.push({...action.payload, quantity: 1, totalPrice: action.payload.price})
            }

        },

        increaseQuantity: (state, action: PayloadAction<number>) => {
            const product = state.cart.find((item: CartProduct) => item.id === action.payload)
            if (product) {
                product.quantity = product.quantity + 1
                product.totalPrice = product.price * product.quantity
            }
        },

        reduceQuantity: (state, action: PayloadAction<number>) => {
            const product = state.cart.find((item: CartProduct) => item.id === action.payload)
            if (product) {
                product.quantity = product.quantity - 1
                product.totalPrice = product.price * product.quantity
            }
            if (product?.quantity === 0) {
                state.cart = state.cart.filter((item: CartProduct) => item.id !== action.payload)
            }
        },

        recalculationFinalPrice: (state) => {
            state.finalPrice = 0;
            state.cart.forEach(item => state.finalPrice += item.totalPrice)
        },

        cartClear: (state) => {
            state.cart = []
            state.finalPrice = 0
        }
    }
})

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;

