import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let myPosts = props.posts
        .map((p) =>
            <div>{p.post}</div>
        );

    let comments = props.comments
        .map((c) =>
            <Post message={c.comment} src_img={c.src_img} />
        );

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    };

    return (
        <div>
            <h3>My Posts:</h3>

            <div>
                <textarea ref={newPostElement}></textarea>
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