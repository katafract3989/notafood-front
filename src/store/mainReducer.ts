import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User, UserApiResponse} from "@/types/User";
import {Category, Product, Restaurant} from "@/types/Restaurant";

type notificationState = {
    isAuth: boolean
    user: User | null,
    restaurant: Restaurant | null
    categories: Category[] | null
    products: Product[] | null
}

const initialState: notificationState = {
    isAuth: false,
    user: null,
    restaurant: null,
    categories: null,
    products: null,
}

export const mainSlice = createSlice({
    name: 'main',
    initialState: initialState,
    reducers: {

        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },
        // TODO доделать
        setUser: (state, action: PayloadAction<User>) => {
            const user = action.payload
            delete user.restaurant
            const restaurant = action.payload.restaurant
            const categories = action.payload.restaurant?.categories
            state.user = user
        },


    }
})

export const mainReducer = mainSlice.reducer;
export const mainActions = mainSlice.actions;

