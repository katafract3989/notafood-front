import {CartProduct} from "../../types/Restaurant";
import cls from "./OrderItem.module.scss";
import SpinButton from "../ui/spin-button/SpinButton";
import {useActions} from "../../hooks/useActions";

const OrderItem = (props: { product: CartProduct }) => {

    const product = props.product
    const {increaseQuantity, reduceQuantity, recalculationFinalPrice} = useActions()

    const increaseQuantityInProduct = () => {
        increaseQuantity(product.id)
        recalculationFinalPrice()
    }
    const reduceQuantityInProduct = () => {
        reduceQuantity(product.id)
        recalculationFinalPrice()
    }

    return (
        <div className={cls.product}>
            <div className={cls['product__image']}>
                <img src={product.preview} width="69"/>
            </div>
            <div className={cls['order-info']}>
                <div className={cls['order-info__title']}>{product.title}</div>
                <div className={cls['order-info__price']}>{product.totalPrice} Руб</div>
            </div>
            <div className={cls['product__quantity']}>
                <SpinButton onIncrease={() => increaseQuantityInProduct()} onReduce={() => reduceQuantityInProduct()} count={product.quantity} />
            </div>
        </div>
    )
}

export default OrderItem;
