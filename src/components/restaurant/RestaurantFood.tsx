import cls from './RestaurantFood.module.scss'
import RestaurantFoodHead from "./RestaurantFoodHead";
import {Category, Restaurant} from "@/types/Restaurant";
import RestaurantFoodCategory from "./RestaurantFoodCategory";
import {useEffect, useState} from "react";

const RestaurantFood = (props: { restaurant: Restaurant }) => {

    const [categories, setCategories] = useState([] as Category[]);

    useEffect(() => {

        if (props.restaurant.categories) {
            const items = props.restaurant.categories.filter((category) => category.products.length > 0)
            setCategories(items)
        }

    }, [props.restaurant])

    const categoryList = categories.length > 0 ? categories.map(category => <RestaurantFoodCategory key={category.id}
                                                                                                    title={category.title}
                                                                                                    products={category.products}/>) :
        <h1>Меню ещё формируется</h1>

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
                {categoryList}
            </div>

        </div>
    );
}

export default RestaurantFood;
