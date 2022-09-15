import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Address, DeliveryTime, DeliveryType} from "@/types/Order";
import addresses from "../mock/addresses.json"
import deliveryTypes from "../mock/delivery-types.json"

type OrderState = {
    restaurantId: number | null,
    restaurantTitle: string,
    address: Address,
    addresses: Address[],
    deliveryType: DeliveryType,
    deliveryTypes: DeliveryType[],
    deliveryTime: DeliveryTime,
    availableDeliveryTime: DeliveryTime[]
}

const initialState: OrderState = {
    restaurantId: null,
    restaurantTitle: '',
    address: addresses[0],
    addresses: addresses,
    deliveryType: deliveryTypes[0],
    deliveryTypes: deliveryTypes,
    deliveryTime: {
        time: '10:30',
        availability: true,
    },
    // TODO Расчитывать на бэке доступное для доставки время, основываясь на часах работы
    availableDeliveryTime: [{
        time: '10:30',
        availability: true,
    }]
}

export const orderSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {

        setRestaurantInfo: (state, action: PayloadAction<{id: number, title: string}>) => {
            state.restaurantId = action.payload.id
            state.restaurantTitle = action.payload.title
        },

        changeStreet: (state, action: PayloadAction<number>) => {
            const address = state.addresses.find(address => address.id === action.payload)
            if (address) {
                state.address = address
            }
        },
        changeApartment: (state, action: PayloadAction<string>) => {
            state.address.apartment = action.payload
        },
        changeIntercom: (state, action: PayloadAction<string>) => {
            state.address.intercom = action.payload
        },
        changeApproach: (state, action: PayloadAction<string>) => {
            state.address.approach = action.payload
        },
        changeFloor: (state, action: PayloadAction<string>) => {
            state.address.floor = action.payload
        },
        changeComment: (state, action: PayloadAction<string>) => {
            state.address.comment = action.payload
        },
        changeDeliveryType: (state, action: PayloadAction<number>) => {
            const type = state.deliveryTypes.find(type => type.id === action.payload)
            if (type) {
                state.deliveryType = type
            }
        },
        changeDeliveryTime: (state, action: PayloadAction<DeliveryTime>) => {
            state.deliveryTime = action.payload
        }

    }
})

export const orderReducer = orderSlice.reducer;
export const orderActions = orderSlice.actions;

