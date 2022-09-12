import cls from './Cart.module.scss'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import OrderItem from "./OrderItem";
import {useActions} from "../../hooks/useActions";

const Cart = () => {

    const {order, finalPrice} = useTypedSelector(state => state.cartReducer);
    const {orderClear} = useActions();
    const orderList = order.map(product => <OrderItem product={product} key={product.id}/>);

    return(
        <div className={cls.cart}>
            <div className={cls['cart__head']}>
                <h2>Корзина</h2>
                <span onClick={() => orderClear()}>Очистить</span>
            </div>

            <div className={cls['cart__order']}>
                {orderList}
            </div>

            <div className={cls['cart__footer']}>
                <div className={cls['cart-footer-button']}>
                    <span>Ваш заказ</span>
                    <span>{finalPrice} руб</span>
                </div>
            </div>
        </div>
    )
}

export default Cart;
