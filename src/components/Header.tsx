import React from 'react';
import logo from '../assets/images/logo.jpg';
const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt="nota.food" />
                <span>NOTA.FOOD</span>
            </div>
        </div>
    );
}

export default Header;
