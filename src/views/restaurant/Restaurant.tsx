import cls from './restaurant.module.scss'
import RestaurantFood from "../../components/restaurant/RestaurantFood";
import restaurantMock from '../../mock/restoraurant.json'
import {useEffect, useState} from "react";
import {Restaurant} from "@/types/Restaurant";

import { api } from "../../common/api";
import {useParams} from "react-router-dom";

const RestaurantPage = () => {
    const {id} = useParams()
    const [restaurant, setRestaurant] = useState<Restaurant>(restaurantMock);

    useEffect(() => {
       reqRestaurant()
    }, [])

    const reqRestaurant = () => {
        api.getRequest(`/restaurants/${id}`).then(res => setRestaurant(res.data));
    }

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
