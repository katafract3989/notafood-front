import {useEffect, useState} from 'react';
import cls from './Restaurants.module.scss';
import Card from './Card';
import {api} from "../../common/api";
import {Restaurant} from "@/types/Restaurant";

const RestaurantsSection = () => {

    const [restaurants, setRestaurants] = useState<Restaurant[]>([])

    useEffect(() => reqRestaurants(), [])

    const reqRestaurants = () => {
        api.getRequest('/restaurants').then(res => {
           const restaurants = res.data as Restaurant[]
           setRestaurants(restaurants.filter((restaurant) => restaurant.isActive));
       })
    }

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
