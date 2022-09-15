import React from 'react';
import logo from '../assets/images/logo.jpg';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to='/' className="header__logo">
                <img src={logo} alt="nota.food"/>
                <span>NOTA.FOOD</span>
            </Link>
        </div>
    );
}

export default Header;
