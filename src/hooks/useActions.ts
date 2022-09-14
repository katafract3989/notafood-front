import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {cartActions} from "../store/orderReducer";
import {addressActions} from "../store/addressReducer";

const allActions = {
    ...cartActions,
    ...addressActions,
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}
