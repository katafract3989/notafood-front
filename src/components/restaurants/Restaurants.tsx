import {useEffect, useState} from 'react';
import cls from './Restaurants.module.scss';
import Card from './Card';
import {Restaurant} from "@/types/Restaurant";
import RestaurantService from "../../common/services/restaurants/RestaurantService";

const RestaurantsSection = () => {
    const restaurantService = new RestaurantService;
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

    useEffect(() => {
        restaurantService.getRestaurants().then(restaurants => setRestaurants(restaurants))
    }, [])

    const restaurantsList = restaurants.map((restaurant) => <Card key={restaurant.id} restaurant={restaurant}/>)

    return (
        <div className={cls['restaurants']}>
            <div className={cls['restaurants__head']}>
                <h2 className={cls['restaurants-title']}>Рестораны</h2>
            </div>
            <div className={cls['restaurants__body']}>
                {restaurantsList}
            </div>
        </div>
    );
}

export default RestaurantsSection;
