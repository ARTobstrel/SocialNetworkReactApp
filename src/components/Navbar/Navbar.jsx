import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import MyFriendsContainer from "./MyFriends/MyFriendsContainer";

const Navbar = () => {
    return (
        <div className={s.nav}>
            <NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink>
            <NavLink to={'/dialogs'} activeClassName={s.active}>Messages</NavLink>
            <NavLink to={'/news'} activeClassName={s.active}>News</NavLink>
            <NavLink to={'/music'} activeClassName={s.active}>Music</NavLink>
            <NavLink to={'/settings'} activeClassName={s.active}>Settings</NavLink>


            <MyFriendsContainer />
        </div>
    )
};

export default Navbar;