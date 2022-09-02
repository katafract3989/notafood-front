import cls from './RestaurantFood.module.scss'
import RestaurantFoodHead from "./RestaurantFoodHead";
import {Restaurant} from "@/types/Restaurant";
import RestaurantFoodCategory from "./RestaurantFoodCategory";

const RestaurantFood = (props: {restaurant: Restaurant}) => {


    return (
        <div className={cls['restaurant-food']}>
            <div className={cls['restaurant-food__head']}>
                <RestaurantFoodHead title={props.restaurant.title} preview={props.restaurant.preview} />
            </div>
            <div className={cls['restaurant-food__food']}>
                <RestaurantFoodCategory />
            </div>

        </div>
    );
}

export default RestaurantFood;
