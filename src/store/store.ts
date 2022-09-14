import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "../store/orderReducer";
import {addressReducer} from "../store/addressReducer";

const rootReducer = combineReducers({
    cartReducer: cartReducer,
    addressReducer: addressReducer
})

export const store = configureStore({
    reducer: rootReducer,
})

export type TypeRootState = ReturnType<typeof store.getState>
