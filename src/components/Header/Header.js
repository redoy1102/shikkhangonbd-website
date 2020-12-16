import React from 'react';
import logo from '../../images/siteLogo.png'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <a href="/home"><img src={logo} alt=""/></a>
            <nav>
                <a href="/free-smart-pdf"> <b>Download Free Smart PDF</b></a>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;