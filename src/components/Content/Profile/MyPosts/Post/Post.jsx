import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src={props.src_img} alt=""/>
                {props.message}
            </div>
        </div>
    )
};

export default Post;