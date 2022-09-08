import cls from './restaurant.module.scss'
import RestaurantFood from "../../components/restaurant/RestaurantFood";
import {useEffect, useState} from "react";
import {Restaurant} from "@/types/Restaurant";
import { api } from "../../common/api";
import {useParams} from "react-router-dom";
import RestaurantMenu from "../../components/restaurant/RestaurantMenu";
import Cart from "../../components/cart/Cart";

const RestaurantPage = () => {
    const {id} = useParams()
    const [restaurant, setRestaurant] = useState<Restaurant>({} as Restaurant);

    const [menuLinks, setMenuLinks] = useState<{title: string}[]>([])

    useEffect(() => {
       reqRestaurant()
    }, [])

    const reqRestaurant = () => {
        api.getRequest(`/restaurants/${id}`).then(res => {
            setRestaurant(res.data)
            const menu = res.data.categories.map((category: { title: string; }) => {
                return {
                    title: category.title
                }
            })
            setMenuLinks(menu)
        });
    }

    return (
        <div className={cls.restaurant}>
            <div className={cls['restaurant__menu']}>
                <RestaurantMenu  menuLinks={menuLinks} />
            </div>
            <div className={cls['restaurant__food']}>
               <RestaurantFood restaurant={restaurant} />
            </div>
            <div className={cls['restaurant__cart']}>
                <Cart />
            </div>
        </div>
    )
}

export default RestaurantPage;
