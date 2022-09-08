import {Product} from "../../types/Restaurant";
import cls from "./OrderItem.module.scss";

const OrderItem = (props: { product: Product }) => {

    const product = props.product

    return (
        <div className={cls.product}>
            <div className={cls['product__image']}>
                <img src={product.preview} width="69"/>
            </div>
            <div className={cls['order-info']}>
                <div className={cls['order-info__title']}>{product.title}</div>
                <div className={cls['order-info__price']}>{product.price} Руб</div>
            </div>
            <div className={cls['product__quantity']}></div>
        </div>
    )
}

export default OrderItem;
