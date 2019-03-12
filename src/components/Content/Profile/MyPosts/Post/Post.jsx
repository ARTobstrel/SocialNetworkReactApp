import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.items}>
            <div className={s.item}>
                <img src={props.src_img} alt=""/>
            </div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
};

export default Post;