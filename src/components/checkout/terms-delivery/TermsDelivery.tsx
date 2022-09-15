import cls from "./TermsDelivery.module.scss"
import DeliveryType from "./DeliveryType";
import CustomSelect from "../../ui/custom-select/CustomSelect";
import AddressGroup from "./Address";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {Address, DeliveryTime} from "@/types/Order";
import {useActions} from "../../../hooks/useActions";

const TermsDelivery = () => {

    const {addresses, deliveryTypes, availableDeliveryTime} = useTypedSelector(state => state.orderReducer);
    const {changeStreet, changeDeliveryTime} = useActions()

    return (
        <div className={cls['terms-delivery']}>
            <h2>Условия доставки</h2>
            <div className={cls['terms-delivery__types']}>
                <DeliveryType types={deliveryTypes}/>
            </div>
            <div className={cls['terms-delivery__addresses']}>
                <CustomSelect list={addresses} label='street' placeholder='Улица:'
                              onChange={(item: Address) => changeStreet(item.id)}/>
                <AddressGroup/>
            </div>
            <div className={cls['terms-delivery__time']}>
                <h2>Время доставки</h2>
                <CustomSelect list={availableDeliveryTime} label='time' placeholder='Сегодня:'
                              onChange={(item: DeliveryTime) => changeDeliveryTime(item)}/>
            </div>
        </div>

    )
}
export default TermsDelivery;
