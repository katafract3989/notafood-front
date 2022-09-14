import cls from "./CustomSelect.module.scss"
import {SetStateAction, useState} from "react";

type Selector = {
    list: Record<string, SelectorValue>[]
    label: string,
    placeholder?: string,
}

type SelectorValue = string | number | null

const CustomSelect = (props: Selector) => {

    const list = props.list
    const defaultPlaceholder: string = props.placeholder || 'Выберите';
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
            <span onClick={() => toggleSelectList()}>{selectedItem ? selectedItem[label] : defaultPlaceholder}</span>
            {selectList}
        </div>
    );
}

export default CustomSelect;
