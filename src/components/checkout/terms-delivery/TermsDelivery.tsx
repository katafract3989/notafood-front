import cls from "./TermsDelivery.module.scss"
import DeliveryType from "./DeliveryType";
import {useState} from "react";
import CustomSelect from "../../ui/custom-select/CustomSelect";
import Address from "./Address";

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

    const [addresses, setAddresses] = useState([
        {
            id: 1,
            title: 'Владимира Селёдкина 83',
        },
        {
            id: 2,
            title: 'Владислава Листьева 9',
        },
        {
            id: 3,
            title: 'Демидова 27',
        },
        {
            id: 4,
            title: 'Родосская 1',
        },
        {
            id: 5,
            title: 'Юности 20',
        },
    ]);

    const [selectedAddress, setSelectedAddress] = useState({
        street: '',
        apartment: '',
        intercom: '',
        approach: '',
        floor: '',
    })

    return (
        <div className={cls['terms-delivery']}>
            <h2>Условия доставки</h2>
            <DeliveryType types={deliveryTypes} />
            <CustomSelect list={addresses} label='title' placeholder='Выберите адрес' />
            <Address />
        </div>

    )
}
export default TermsDelivery;
