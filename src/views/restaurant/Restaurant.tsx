import cls from './restaurant.module.scss'
import RestaurantFood from "../../components/restaurant/RestaurantFood";
import restaurantsMock from '../../mock/resctics.json'
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Restaurant} from "@/types/Restaurant";

const RestaurantPage = () => {
    const params = useParams();
    const [restaurant, setRestaurant] = useState(restaurantsMock[0] as Restaurant);

    useEffect(() => {
        const item = restaurantsMock.find((item) => item.id === parseInt(params.id as string))
        if(item) {
            setRestaurant(item)
        }

    }, [])

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
