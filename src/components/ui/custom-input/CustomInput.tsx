import cls from "./CustomInput.module.scss"
import {ChangeEvent} from "react";

type Input = {
    label: string,
    onInput: Function
    type?: string
    value?: string,
}

const CustomInput = (props: Input) => {

    const onInput = (e: ChangeEvent<HTMLInputElement>) =>  {
        props.onInput(e.currentTarget.value)
    }

    return (
        <div className={cls['custom-input']}>
            <label className={cls['custom-input__label']}>{props.label}</label>
            <input className={cls['custom-input__input']} type={props.type || 'text'} onChange={e => onInput(e)} value={props.value} />
        </div>

    )
}

export default CustomInput;
