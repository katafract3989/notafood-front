import cls from './RestaurantFoodCategory.module.scss'

const RestaurantFoodCategory = () => {

    return (
        <div className={cls['restaurant-category']}>
            <div className={cls['restaurant-category__head']}>
                <span>Название</span>
            </div>
            <div className={cls['restaurant-category__food']}>
            </div>

        </div>
    );
}

export default RestaurantFoodCategory;
