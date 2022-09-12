import cls from './SpinButton.module.scss'
type SpinButtonType = {
    onIncrease: Function,
    onReduce: Function,
    count: number
}

const SpinButton = (props: SpinButtonType) => {

    return(
        <div className={cls['spin-button']}>
            <div className={cls['spin-button__button']} onClick={() => props.onReduce()}>
                <span>-</span>
            </div>
            <div className={cls['spin-button__count']}>
                <span>{props.count}</span>
            </div>
            <div className={cls['spin-button__button']} onClick={() => props.onIncrease()}>
                <span>+</span>
            </div>
        </div>
    )
}

export default SpinButton;
