import cls from "./DeliveryType.module.scss"
import {useState} from "react";

type DeliveryType = {
    types: Type[]
}

type Type = {
    id: number,
    title: string,
    price: number,
}

type DeliveryTypeButton = {
    type: Type,
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

const DeliveryType = (props: DeliveryType) => {
    const [selectedTypeId, setSelectedTypeId] = useState(1)
    const types = props.types.map((type) => <TypeButton key={type.id} type={type}
                                                        onSelect={() => setSelectedTypeId(type.id)}
                                                        isActive={type.id === selectedTypeId}/>)

    return (
        <div className={cls['delivery-type']}>
            {types}
        </div>
    );
}
export default DeliveryType;
