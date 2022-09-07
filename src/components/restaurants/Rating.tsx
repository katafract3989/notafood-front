import {useEffect, useState} from "react";
import cls from "./Rating.module.scss";
// TODO подключить библиотеку для иконок (пока временный вариант)
import starIconGreen from "../../assets/icons/icon-star-green.svg"
import starIconSilver from "../../assets/icons/icon-star-silver.svg"
import starIconYellow from "../../assets/icons/icon-star-yellow.svg"

const Rating = (props: { rating: number }) => {

    const [text, setText] = useState('');
    const [star, setStar] = useState(starIconSilver);
    const rating = props.rating;

    const ratingHandler = () => {
        if (rating < 3.5 && rating > 0) {
            setText('Плохо');
            setStar(starIconSilver);
        } else if (rating <= 4.5 && rating >= 3.5) {
            setText('Хорошо');
            setStar(starIconYellow);
        } else if (rating > 4.5) {
            setText('Отлично');
            setStar(starIconGreen);
        }
    };

    useEffect(() => {
        ratingHandler()
    }, []);


    return (
        <div className={cls.rating}>
            <span className={cls['rating__icon']}>
                <img src={star} width="14" alt="star-rating"/>
            </span>
            <span className={cls['rating__number']}>{rating}</span>
            <span className={cls['rating__text']}>{text}</span>
        </div>
    );
}

export default Rating;
