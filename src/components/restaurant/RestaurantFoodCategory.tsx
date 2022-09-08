import cls from './RestaurantFoodCategory.module.scss'
import FoodCard from "./FoodCard";
import {Product} from "../../types/Restaurant";

const RestaurantFoodCategory = (props: {title: string, products: Product[]}) => {

    const cards = props.products.map(card => <FoodCard card={card} key={card.id} />)

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
