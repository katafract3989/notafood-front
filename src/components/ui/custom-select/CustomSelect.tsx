import cls from "./CustomSelect.module.scss"
import {useState} from "react";

type Selector = {
    list: Record<string, SelectorValue>[]
    label: string,
    placeholder?: string,
    onChange?: Function
}

type SelectorValue = string | number | null | boolean

const CustomSelect = (props: Selector) => {

    const list = props.list
    const placeholder: string = props.placeholder || '';
    const label: string = props.label
    const [selectedItem, setSelectedItem] = useState<Record<string, SelectorValue>>(list[0]);
    const [isUnwrap, setIsUnwrap] = useState(false);
    let selectList;

    const toggleSelectList = () => setIsUnwrap(!isUnwrap)

    const items = list.map(item => {
        return {
            label: item[label],
        }
    })

    const Item = (props: { label: SelectorValue, onSelect: Function, index: number }) => {
        return (
            <div className={cls['select-list__item']} onClick={() => props.onSelect(props.index)}>{props.label}</div>
        )
    }

    const selectItem = (index: number) => {
        setSelectedItem(list[index])
        toggleSelectList()
        if(props.onChange) {
            props.onChange(list[index])
        }

    }

    const Items = items.map((item, index) => <Item key={index} onSelect={(index: number) => selectItem(index)} index={index} label={item.label} />)

    const List = () => {
        return (
            <div className={cls['select-list']}>
                {Items}
            </div>
        )
    }

    selectList = isUnwrap ? <List /> : ''

    return (
        <div className={cls['custom-select']}>
            <span className={cls['custom-select__selected']} onClick={() => toggleSelectList()}>{placeholder} {selectedItem ? selectedItem[label] : ''}</span>
            {selectList}
        </div>
    );
}

export default CustomSelect;
