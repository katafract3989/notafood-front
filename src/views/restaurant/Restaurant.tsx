import cls from './restaurant.module.scss'
import RestaurantFood from "../../components/restaurant/RestaurantFood";
import {useEffect, useState} from "react";
import {Restaurant} from "@/types/Restaurant";
import {api} from "../../common/api";
import {useParams} from "react-router-dom";
import RestaurantMenu from "../../components/restaurant/RestaurantMenu";
import Cart from "../../components/cart/Cart";
import {useActions} from "../../hooks/useActions";

type MenuLink = { title: string }

const RestaurantPage = () => {
    const {id} = useParams()
    const [restaurant, setRestaurant] = useState({} as Restaurant);
    const {setRestaurantInfo} = useActions();
    const [menuLinks, setMenuLinks] = useState<MenuLink[]>([])

    useEffect(() => reqRestaurant(), [])

    const reqRestaurant = () => {
        api.getRequest(`/restaurants/${id}`).then((res) => {

            const restaurant = res.data as Restaurant

            setRestaurant(restaurant)
            setMenuLinks(restaurant.categories.map((category: { title: string; }) => {
                return {
                    title: category.title
                }
            }))
            setRestaurantInfo({id: restaurant.id, title: restaurant.title})
        });
    }

    return (
        <div className={cls.restaurant}>
            <div className={cls['restaurant__menu']}>
                <RestaurantMenu menuLinks={menuLinks}/>
            </div>
            <div className={cls['restaurant__food']}>
                <RestaurantFood restaurant={restaurant}/>
            </div>
            <div className={cls['restaurant__cart']}>
                <Cart/>
            </div>
        </div>
    )
}

export default RestaurantPage;
