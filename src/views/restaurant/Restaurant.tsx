import cls from './restaurant.module.scss'
import RestaurantFood from "../../components/restaurant/RestaurantFood";
import {useEffect, useState} from "react";
import {Restaurant} from "@/types/Restaurant";
import {useParams} from "react-router-dom";
import RestaurantMenu from "../../components/restaurant/RestaurantMenu";
import Cart from "../../components/cart/Cart";
import {useActions} from "../../hooks/useActions";
import RestaurantService from "../../common/services/restaurants/RestaurantService";

type MenuLink = { title: string }

const RestaurantPage = () => {
    const restaurantService = new RestaurantService;
    const {id} = useParams()
    const [restaurant, setRestaurant] = useState({} as Restaurant);
    const {setRestaurantInfo} = useActions();
    const [menuLinks, setMenuLinks] = useState([] as MenuLink[])

    useEffect(() => {
        if(id) {
            getRestaurant(id);
        }
    }, []);


    const getRestaurant = (id: number | string) => {
        if(id) {
            restaurantService.getRestaurant(id).then(restaurant => {
                setRestaurant(restaurant);
                setRestaurantInfo({id: restaurant.id, title: restaurant.title})
                setMenu(restaurant);
            })
        }

    }
    const setMenu = (restaurant: Restaurant) => {
        const menuLinks = restaurant.categories.map((category) => {
            return {
                title: category.title
            }
        })
        setMenuLinks(menuLinks)
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
