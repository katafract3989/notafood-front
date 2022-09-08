import cls from './Cart.module.scss'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import OrderItem from "./OrderItem";


const Cart = () => {

    const {order} = useTypedSelector(state => state.cartReducer)

    const orderList = order.map(product => <OrderItem product={product}/>)

    return(
        <div className={cls.cart}>
            <div className={cls['cart__head']}>
                <h2>Корзина</h2>
            </div>

            <div className={cls['cart__order']}>
                {orderList}
            </div>

            <div className={cls['cart__footer']}>
            </div>
        </div>
    )
}

export default Cart;
