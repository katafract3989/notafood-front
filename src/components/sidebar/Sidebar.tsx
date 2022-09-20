import cls from "./Sidebar.module.scss"
import {Link} from "react-router-dom";
import {useState} from "react";

type Link = {
   title: string,
   href: string,
}

const Sidebar = () => {


   const [links, setLinks] = useState([
      {
         title: 'Настройки',
         href: '/',
      },
      {
         title: 'Меню',
         href: '#',
      },
      {
         title: 'Статистика',
         href: '#',
      },
      {
         title: 'Финансы',
         href: '#',
      },
   ] as Link[]);


   const menuLinks = links.map((link, index) => <Link key={index} className={cls['sidebar-menu__link']} to={link.href}>{link.title}</Link>)


   return (
       <div className={cls.sidebar}>
          <h3>Название ресторана</h3>

          <div className={cls['sidebar-menu']}>
             {menuLinks}
          </div>

       </div>
   )
}

export default Sidebar;
