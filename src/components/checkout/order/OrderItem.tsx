import cls from "./OrderItem.module.scss"
import SpinButton from "../../ui/spin-button/SpinButton";
import {CartProduct} from "@/types/Restaurant";
import {useActions} from "../../../hooks/useActions";

type OrderItemProps = {
    product: CartProduct
}

const OrderItem = (props: OrderItemProps) => {

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
        <div className={cls['order-item']}>
            <div className={cls['order-item__preview']}>
                <img src={product.preview} alt=""/>
            </div>
            <div className={cls['order-item__title']}>
                <span className={cls['item-title']}>
                    {product.title}
                </span>
                <span className={cls['item-portion']}>
                    {product.portion}
                </span>
            </div>
            <div className={cls['order-item__quantity']}>
                <SpinButton onIncrease={() => increaseQuantityInProduct()} onReduce={() => reduceQuantityInProduct()} count={product.quantity} />
            </div>
            <div className={cls['order-item__price']}>
                {product.price} руб
            </div>
        </div>
    )
}

export default OrderItem;
