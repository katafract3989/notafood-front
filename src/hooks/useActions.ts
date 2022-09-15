import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {cartActions} from "../store/cartReducer";
import {orderActions} from "../store/orderReducer";

const allActions = {
    ...cartActions,
    ...orderActions,
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}
