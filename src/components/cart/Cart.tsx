import cls from './Cart.module.scss'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import OrderItem from "./OrderItem";
import {useActions} from "../../hooks/useActions";
import {Link} from "react-router-dom";

const Cart = () => {

    const {cart, finalPrice} = useTypedSelector(state => state.cartReducer);
    const {cartClear} = useActions();
    const orderList = cart.length > 0 ? cart.map(product => <OrderItem product={product} key={product.id}/>) :
        <div className={cls['cart__empty-message']}><h3>Корзина пуста</h3></div>;

    return (
        <div className={cls.cart}>
            <div className={cls['cart__head']}>
                <h2>Корзина</h2>
                <span onClick={() => cartClear()}>Очистить</span>
            </div>

            <div className={cls['cart__order']}>
                {orderList}
            </div>

            <Link to='/checkout' className={cls['cart__footer']}>
                <div className={cls['cart-footer-button']}>
                    <span>Ваш заказ</span>
                    <span>{finalPrice} руб</span>
                </div>
            </Link>
        </div>
    )
}

export default Cart;
