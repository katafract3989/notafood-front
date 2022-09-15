import cls from "./Checkout.module.scss"
import TermsDelivery from "../../components/checkout/terms-delivery/TermsDelivery";
import Order from "../../components/checkout/order/Order";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Checkout = () => {
    const {restaurantTitle, restaurantId} = useTypedSelector(state => state.orderReducer)

    const navigate = useNavigate()

    useEffect(() => {
        if(!restaurantId) {
            navigate('/')
        }
    }, [])

    return (
        <div className={cls.container}>
            <h1>{restaurantTitle}</h1>
            <div className={cls.checkout}>

                <div className={cls.row}>
                    <TermsDelivery />
                    <Order />
                </div>
                <div className={cls.row}>
                    <h2>2</h2>
                </div>
            </div>
        </div>

    )
}

export default Checkout;
