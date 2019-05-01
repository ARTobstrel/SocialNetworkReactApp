import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (

        <header className={s.header}>
            <span>
                <img
                    src="http://pngimg.com/uploads/odnoklassniki/odnoklassniki_PNG30.png"
                    alt=""/>
            </span>
            <span>
                <h2>Hello, people!</h2>
                <h3>Welcome to my Social Network</h3>
            </span>

        </header>
    )
};

export default Header;


