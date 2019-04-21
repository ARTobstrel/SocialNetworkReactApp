import s from './MyFriends.module.css';
import React from "react";

const MyFriends = (props) => {
    let friends = props.myfriends
        .map(f =>
            <div className={s.item} key={f.id}>
                <img src={f.src_img} alt=""/>
                {f.name}
            </div>
        );

    return (
        <div className={s.container}>
            <h5>My friends:</h5>
            <div className={s.flex_container}>
                {friends}
            </div>
        </div>
    )
};

export default MyFriends;