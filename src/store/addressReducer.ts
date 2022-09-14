import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Address} from "@/types/Address";

const initialState: { address: Address } = {
    address: {
        street: '',
        apartment: '',
        intercom: '',
        approach: '',
        floor: '',
    },
}

export const addressSlice = createSlice({
    name: 'address',
    initialState: initialState,
    reducers: {

        changeStreet: (state, action: PayloadAction<string>) => {
            state.address.street = action.payload
        },
        changeApartment: (state, action: PayloadAction<string | number>) => {
            state.address.apartment = action.payload
        },
        changeIntercom: (state, action: PayloadAction<string | number>) => {
            state.address.intercom = action.payload
        },
        changeApproach: (state, action: PayloadAction<string | number>) => {
            state.address.approach = action.payload
        },
        changeFloor: (state, action: PayloadAction<string | number>) => {
            state.address.floor = action.payload
        },

    }
})

export const addressReducer = addressSlice.reducer;
export const addressActions = addressSlice.actions;

