import {useEffect, useState} from 'react';
import cls from './Restaurants.module.scss';
import Card from './Card';
import Api from "../../common/api/axios";
import {Restaurant} from "@/types/Restaurant";

const RestaurantsSection = () => {

    const [restaurants, setRestaurants] = useState<Restaurant[]>([])

    useEffect(() => reqRestaurants(), [])

    const reqRestaurants = () => {
       Api.getRequest('/restaurants').then(res => {
           if(Array.isArray(res.data)) {
               setRestaurants(res.data)
           }
       });
    }

    const restaurantsList = restaurants.map((item, index) => <Card key={index} restaurant={item}/>)

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
