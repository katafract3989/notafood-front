import cls from "./CustomInput.module.scss"
import {ChangeEvent} from "react";

type Input = {
    label: string
    onInput: Function
}

const CustomInput = (props: Input) => {

    const onInput = (e: ChangeEvent<HTMLInputElement>) =>  {
        props.onInput(e.currentTarget.value)
    }

    return (
        <div className={cls['custom-input']}>
            <label className={cls['custom-input__label']}>{props.label}</label>
            <input className={cls['custom-input__input']} onChange={e => onInput(e)}  type="text" />
        </div>

    )
}

export default CustomInput;
