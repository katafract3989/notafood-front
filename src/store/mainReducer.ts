import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "@/types/User";

type notificationState = {
    isAuth: boolean
    user: User | null,
}

const initialState: notificationState = {
    isAuth: false,
    user: null,
}

export const mainSlice = createSlice({
    name: 'main',
    initialState: initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },

        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
    }
})

export const mainReducer = mainSlice.reducer;
export const mainActions = mainSlice.actions;

