import cls from "./TermsDelivery.module.scss"
import DeliveryType from "./DeliveryType";
import {useState} from "react";

const TermsDelivery = () => {


    const [deliveryTypes, setDeliveryTypes] = useState([
        {
            id: 1,
            title: 'Доставка',
            price: 99,
        },
        {
            id: 2,
            title: 'Заказ другому',
            price: 99,
        },
    ]);


    return (
        <div className={cls['terms-delivery']}>
            <h2>Условия доставки</h2>

            <DeliveryType types={deliveryTypes} />

        </div>

    )
}
export default TermsDelivery;
