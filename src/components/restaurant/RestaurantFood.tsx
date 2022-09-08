import cls from './RestaurantFood.module.scss'
import RestaurantFoodHead from "./RestaurantFoodHead";
import {Restaurant} from "@/types/Restaurant";
import RestaurantFoodCategory from "./RestaurantFoodCategory";

const RestaurantFood = (props: {restaurant: Restaurant}) => {

    const categories = props.restaurant.categories?.map(category => {
        if(category.products.length > 0) {
           return <RestaurantFoodCategory title={category.title} key={category.id} products={category.products} />
        }
    })

    return (
        <div className={cls['restaurant-food']}>
            <div className={cls['restaurant-food__head']}>
                <RestaurantFoodHead
                    title={props.restaurant.title}
                    preview={props.restaurant.preview}
                    rating={props.restaurant.rating}
                    minDeliveryTime={props.restaurant.minDeliveryTime}
                    maxDeliveryTime={props.restaurant.maxDeliveryTime}/>
            </div>
            <div className={cls['restaurant-food__food']}>
                {categories}
            </div>

        </div>
    );
}

export default RestaurantFood;
