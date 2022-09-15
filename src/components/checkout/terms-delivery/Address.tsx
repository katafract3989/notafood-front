import cls from "./Address.module.scss"
import CustomInput from "../../ui/custom-input/CustomInput";
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const Address = () => {
    const {changeApartment, changeFloor, changeIntercom, changeApproach, changeComment} = useActions();

    const {address} = useTypedSelector(state => state.orderReducer);

    return (
        <div className={cls.address}>
            <div className={cls['address__input']}>
                <CustomInput label='Кв./офис' value={address.apartment}  onInput={(value: string) => changeApartment(value)}/>
            </div>
            <div className={cls['address__input']}>
                <CustomInput label='Домофон' value={address.intercom}  onInput={(value: string) => changeIntercom(value)}/>
            </div>
            <div className={cls['address__input']}>
                <CustomInput label='Подъезд' value={address.approach}  onInput={(value: string) => changeApproach(value)}/>
            </div>
            <div className={cls['address__input']}>
                <CustomInput label='Этаж' value={address.floor} onInput={(value: string) => changeFloor(value)}/>
            </div>
            <div className={cls['address__input--comment']}>
                <CustomInput label='Комментарий к заказу' value={address.comment} onInput={(value: string) => changeComment(value)}/>
            </div>
        </div>
    )
}

export default Address;
