import cls from './RestaurantFoodCategory.module.scss'
import FoodCard from "./FoodCard";
import {Food} from "@/types/Restaurant";

const RestaurantFoodCategory = (props: {title: string, food: Food[]}) => {

    const cards = props.food.map(card => <FoodCard card={card} key={card.id} />)

    return (
        <div className={cls['restaurant-category']}>
            <div className={cls['restaurant-category__head']}>
                <span>{props.title}</span>
            </div>
            <div className={cls['restaurant-category__food']}>
                {cards}
            </div>

        </div>
    );
}

export default RestaurantFoodCategory;
