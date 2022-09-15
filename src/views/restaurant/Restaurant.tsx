import cls from './restaurant.module.scss'
import RestaurantFood from "../../components/restaurant/RestaurantFood";
import {useEffect, useState} from "react";
import {Restaurant} from "@/types/Restaurant";
import Api from "../../common/api/axios";
import {useParams} from "react-router-dom";
import RestaurantMenu from "../../components/restaurant/RestaurantMenu";
import Cart from "../../components/cart/Cart";
import {useActions} from "../../hooks/useActions";


type MenuLink = {title: string}

const RestaurantPage = () => {
    const {id} = useParams()
    const [restaurant, setRestaurant] = useState<Restaurant>({} as Restaurant);
    const {setRestaurantInfo} = useActions();
    const [menuLinks, setMenuLinks] = useState<MenuLink[]>([])

    useEffect(() => reqRestaurant(), [])

    const reqRestaurant = () => {
        Api.getRequest(`/restaurants/${id}`).then(res => {
            if(!Array.isArray(res.data)) {
                setRestaurant(res.data)
                const menu = res.data.categories?.map((category: { title: string; }) => {
                    return {
                        title: category.title
                    }
                })
                if(menu) {
                    setMenuLinks(menu)
                }
                setRestaurantInfo({id: res.data.id, title: res.data.title})
            }
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
