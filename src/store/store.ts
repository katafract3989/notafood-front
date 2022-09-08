import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "../store/orderReducer";

const rootReducer = combineReducers({
    cartReducer: cartReducer
})

export const store = configureStore({
    reducer: rootReducer,
})

export type TypeRootState = ReturnType<typeof store.getState>
