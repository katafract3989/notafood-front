import cls from "./FoodCard.module.scss"
import {Product} from "../../types/Restaurant";
import {useActions} from "../../hooks/useActions";
import FoodCardAddButton from "./FoodCardAddButton";

const FoodCard = (props: { card: Product }) => {

    return (
        <div className={cls['food-card']}>
            <div className={cls['food-card__preview']}>
                <img src={props.card.preview} alt=""/>
            </div>
            <div className={cls['food-card__price']}>
                <span>{props.card.price} руб</span>
            </div>
            <div className={cls['food-card__title']}>
                <span>{props.card.title}</span>
            </div>
            <div className={cls['food-card__portion']}>
                <span>{props.card.portion}</span>
            </div>
            <div className={cls['food-card__footer']}>
                <FoodCardAddButton card={props.card} />
            </div>
        </div>
    )
}

export default FoodCard;
