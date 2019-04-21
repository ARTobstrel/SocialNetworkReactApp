import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let myPosts = props.posts
        .map( p =>
            <div key={p.id}>{p.post}</div>
        );

    let comments = props.comments
        .map( c =>
            <Post message={c.comment} key={c.id} src_img={c.src_img}/>
        );

    let newPostElement = React.createRef();

    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    };

    let onAddPost = () => {
        props.addPost();
    };

    return (
        <div>
            <h3>My Posts:</h3>

            <div>
                <textarea onChange={onChangePost} ref={newPostElement} value={props.newPostText}/>
            </div>

            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>

            <div className={s.posts}>
                {myPosts}
                {comments}
            </div>

        </div>
    )
};

export default MyPosts;