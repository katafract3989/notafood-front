import React, {useEffect, useState} from 'react';
import cls from './Card.module.scss';
import Rating from "./Rating";
import {Link} from "react-router-dom";
import {Restaurant} from "@/types/Restaurant";

const Card = (props: { restaurant: Restaurant }) => {

    const restaurant = props.restaurant;
    const [deliveryTime, setDeliveryTime] = useState('');

    useEffect(() => {
        setDeliveryTime(restaurant.maxDeliveryTime ? `${restaurant.minDeliveryTime} - ${restaurant.maxDeliveryTime}` : `~${restaurant.minDeliveryTime}`)
    }, []);

    return (
        <Link to={`/restaurant/${restaurant.id}`}>
            <div className={cls.card}>
                <div className={cls['card__preview']}>
                    <img src={restaurant.preview} alt={restaurant.title}/>
                    <div className={cls['delivery-time']}>
                        <span>{deliveryTime} мин</span>
                    </div>
                </div>
                <div className={cls['card__title']}>
                    <span>{restaurant.title}</span>
                </div>
                <div className={cls['card__footer']}>
                    <Rating rating={restaurant.rating}/>
                </div>
            </div>
        </Link>
    );
}

export default Card;
