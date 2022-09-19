import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "./cartReducer";
import {orderReducer} from "./orderReducer";
import {notificationReducer} from "./notificationReducer";
import {mainReducer} from "./mainReducer";

const rootReducer = combineReducers({
    mainReducer: mainReducer,
    cartReducer: cartReducer,
    orderReducer: orderReducer,
    notificationReducer: notificationReducer
})

export const store = configureStore({
    reducer: rootReducer,
})

export type TypeRootState = ReturnType<typeof store.getState>
