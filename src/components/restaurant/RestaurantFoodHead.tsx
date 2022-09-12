import cls from './RestaurantFoodHead.module.scss'
import {useEffect, useState} from "react";
import starIcon from "../../assets/icons/icon-star.svg"
import deliveryIcon from "../../assets/icons/icon-delivery.svg"
import infoIcon from "../../assets/icons/icon-info.svg"

type RestaurantHead = {
    title: string,
    preview: string,
    rating: number,
    minDeliveryTime: number,
    maxDeliveryTime: number
}

const RestaurantFoodHead = (props: RestaurantHead) => {

    const [deliveryTime, setDeliveryTime] = useState('');

    useEffect(() => {

        setDeliveryTime(props.maxDeliveryTime ? `${props.minDeliveryTime} - ${props.maxDeliveryTime}` : `~${props.minDeliveryTime}` )

    }, [props.minDeliveryTime, props.maxDeliveryTime]);


    return (
        <div className={cls['restaurant-head']}>
            <div className={cls['restaurant-head__preview']}>
                <img src={props.preview} alt={props.title} />
            </div>

            <div className={cls['restaurant-info']}>
                <div className={cls['restaurant-info__title']}>
                    <span>{props.title}</span>
                </div>
                <div className={cls['restaurant-actions']}>
                    <div className={cls['restaurant-actions__button']}>
                        <img src={deliveryIcon} alt="" width="24" />
                        <span>{deliveryTime} мин</span>
                    </div>
                    <div className={cls['restaurant-actions__button']}>
                        <img src={starIcon} alt="" width="24" />
                        <span>{props.rating}</span>
                    </div>
                    <div className={cls['restaurant-actions__button']}>
                        <img src={infoIcon} alt="" width="24" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default RestaurantFoodHead;
