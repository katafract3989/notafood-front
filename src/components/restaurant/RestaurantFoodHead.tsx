import cls from './RestaurantFoodHead.module.scss'

const RestaurantFoodHead = (props: {title: string, preview: string}) => {

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
                        <span>~45 мин</span>
                    </div>
                    <div className={cls['restaurant-actions__button']}>
                        <span>4.8</span>
                    </div>
                    <div className={cls['restaurant-actions__button']}>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default RestaurantFoodHead;
