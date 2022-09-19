import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type notificationState = {
    isAuth: boolean
}

const initialState: notificationState = {
    isAuth: false
}

export const mainSlice = createSlice({
    name: 'main',
    initialState: initialState,
    reducers: {

        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },

    }
})

export const mainReducer = mainSlice.reducer;
export const mainActions = mainSlice.actions;

