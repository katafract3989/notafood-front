import cls from "./Address.module.scss"
import CustomInput from "../../ui/custom-input/CustomInput";
import {useActions} from "../../../hooks/useActions";

const Address = () => {
    const {changeApartment, changeFloor, changeIntercom, changeApproach} = useActions();
    return (
        <div className={cls.address}>
            <div className={cls['address__input']}>
                <CustomInput label='Кв./офис'  onInput={() => changeApartment}/>
            </div>
            <div className={cls['address__input']}>
                <CustomInput label='Домофон'  onInput={() => changeIntercom}/>
            </div>
            <div className={cls['address__input']}>
                <CustomInput label='Подъезд'  onInput={() => changeApproach}/>
            </div>
            <div className={cls['address__input']}>
                <CustomInput label='Этаж'  onInput={() => changeFloor}/>
            </div>
            <div className={cls['address__input--comment']}>
                <CustomInput label='Комментарий к заказу' onInput={() => {}}/>
            </div>
        </div>
    )
}

export default Address;
