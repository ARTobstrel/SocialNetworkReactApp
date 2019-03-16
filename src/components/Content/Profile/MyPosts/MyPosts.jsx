import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextCreator} from "../../../../redux/profile-reducer";


const MyPosts = (props) => {
    let myPosts = props.posts
        .map((p) =>
            <div>{p.post}</div>
        );

    let comments = props.comments
        .map((c) =>
            <Post message={c.comment} src_img={c.src_img}/>
        );

    let newPostElement = React.createRef();

    let onChangePost = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextCreator(text);
        props.dispatch(action);
    };

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    return (
        <div>
            <h3>My Posts:</h3>

            <div>
                <textarea onChange={onChangePost} ref={newPostElement} value={props.newPostText}/>
            </div>

            <div>
                <button onClick={addPost}>Add post</button>
            </div>

            <div className={s.posts}>
                {myPosts}
                {comments}
            </div>

        </div>
    )
};

export default MyPosts;