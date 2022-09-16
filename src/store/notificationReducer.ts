import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Notif} from "@/types/Notification";

type notificationState = {
    notifications: Notif[]
}

const initialState: notificationState = {
    notifications: []
}

export const notificationSlice = createSlice({
    name: 'notification',
    initialState: initialState,
    reducers: {

        pushNotification: (state, action: PayloadAction<Notif>) => {

           const notification = {
               ...action.payload,
               isRead: false,
               id: new Date().getTime()
           }

           if(state.notifications.length > 5) {
               state.notifications.pop()
               state.notifications.unshift(notification)
           } else {
               state.notifications.unshift(notification)
           }
        }
    }
})

export const notificationReducer = notificationSlice.reducer;
export const notificationActions = notificationSlice.actions;

