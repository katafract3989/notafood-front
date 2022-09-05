import cls from "./FoodCard.module.scss"
import {Food} from "@/types/Restaurant";

const FoodCard = (props: {card: Food}) => {
  return(
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
              <button className={cls['card-button']}>+ Добавить</button>
          </div>
      </div>
  )
}

export default FoodCard;
