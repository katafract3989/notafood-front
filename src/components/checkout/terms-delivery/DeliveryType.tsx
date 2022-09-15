import cls from "./DeliveryType.module.scss"
import {useEffect, useState} from "react";
import {DeliveryType} from "@/types/Order";
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

type PropsDeliveryType = {
    types: DeliveryType[]
}

type DeliveryTypeButton = {
    type: DeliveryType,
    isActive: boolean,
    onSelect: Function,
}

const TypeButton = (props: DeliveryTypeButton) => {

    return (
        <div className={`${cls['type-button']} ${props.isActive ? cls['type-button--active'] : ''}`}
             onClick={() => props.onSelect()}
        >
            <span className={cls['type-button__title']}>{props.type.title}</span>
            <span className={cls['type-button__price']}>{props.type.price} руб</span>
        </div>
    )
}

const Type = (props: PropsDeliveryType) => {
    const {deliveryType} = useTypedSelector(state => state.orderReducer);
    const [selectedTypeId, setSelectedTypeId] = useState(deliveryType.id)
    const {changeDeliveryType} = useActions();

    useEffect(() => {
        changeDeliveryType(selectedTypeId)
    }, [selectedTypeId])

    const types = props.types.map((type) => <TypeButton key={type.id} type={type}
                                                        onSelect={() => setSelectedTypeId(type.id)}
                                                        isActive={type.id === selectedTypeId}/>)

    return (
        <div className={cls['delivery-type']}>
            {types}
        </div>
    );
}
export default Type;
