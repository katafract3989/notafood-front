import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "./cartReducer";
import {orderReducer} from "./orderReducer";

const rootReducer = combineReducers({
    cartReducer: cartReducer,
    orderReducer: orderReducer
})

export const store = configureStore({
    reducer: rootReducer,
})

export type TypeRootState = ReturnType<typeof store.getState>
