import cls from './restaurant.module.scss'
import RestaurantFood from "../../components/restaurant/RestaurantFood";
import restaurantMock from '../../mock/restoraurant.json'
import { useState} from "react";
import {useParams} from "react-router-dom";
import {Restaurant} from "@/types/Restaurant";

const RestaurantPage = () => {
    const params = useParams();
    const [restaurant, setRestaurant] = useState(restaurantMock as Restaurant);

    return (
        <div className={cls.restaurant}>
            <div className={cls['restaurant__menu']}>
            </div>
            <div className={cls['restaurant__food']}>
               <RestaurantFood restaurant={restaurant} />
            </div>
            <div className={cls['restaurant__cart']}>

            </div>
        </div>
    )
}

export default RestaurantPage;
