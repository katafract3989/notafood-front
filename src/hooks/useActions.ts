import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {cartActions} from "../store/cartReducer";
import {orderActions} from "../store/orderReducer";
import {notificationActions} from "../store/notificationReducer";

const allActions = {
    ...cartActions,
    ...orderActions,
    ...notificationActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}
