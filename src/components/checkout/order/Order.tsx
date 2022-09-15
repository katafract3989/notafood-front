import cls from "./Order.module.scss";
import OrderItem from "./OrderItem";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Order = () => {
    const navigate = useNavigate()
    const {cart} = useTypedSelector(state => state.cartReducer);
    const {restaurantId} = useTypedSelector(state => state.orderReducer);
    const OrderItemList = cart.map(product => <OrderItem key={product.id} product={product} />)

    useEffect(() => {
        if (cart.length === 0) {
            navigate(`/restaurant/${restaurantId}`)
        }
    }, [cart])

    return (
        <div className={cls['order']}>
            <h2>Ваш заказ</h2>
            {OrderItemList}
        </div>
    )
}

export default Order;
