import cls from "./RestaurantMenu.module.scss"
import {Link} from "react-router-dom";
import classNames from "classnames";

const RestaurantMenu = (props: { menuLinks: { title: string }[] }) => {

    const backLinkClasses = classNames({
        'menu-link': true,
        'menu-link--active': true
    });

    const linkClasses = classNames({
        'menu-link': true,
        'menu-link--active': false
    });

    const menuLinks = props.menuLinks.map((link: { title: string }, index) => <Link key={index} to="#test"
                                                                                    className={linkClasses}>{link.title}</Link>)

    return (
        <div className={cls['restaurant-menu']}>
            <div className={cls['restaurant-menu__head']}>
                <Link to="/" className={backLinkClasses}> Все рестораны</Link>
            </div>
            <div className={cls['restaurant-menu__list']}>
                <h2>Меню</h2>
                {menuLinks}
            </div>

        </div>
    )
}

export default RestaurantMenu;
