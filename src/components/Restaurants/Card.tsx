import React from 'react';
import cls from './Card.module.scss';
import Rating from "./Rating";

const Card = (props: {restaurant: any}) => {

    const restaurant = props.restaurant;

    return (
        <div className={cls.card}>
            <div className={cls['card__preview']}>
                <img src={restaurant.preview} alt={restaurant.title} />
            </div>
            <div className={cls['card__title']}>
                <span>{restaurant.title}</span>
            </div>
            <div className={cls['card__footer']}>
                    <Rating rating={restaurant.rating}/>
            </div>
        </div>
    );
}

export default Card;
