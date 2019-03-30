import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextCreator} from "../../../../redux/profile-reducer";

const MyPostsContainer = (props) => {

    let state = props.store.getState().profilePage;

    let onChangePost = (text) => {
        let action = updateNewPostTextCreator(text);
        props.store.dispatch(action);
    };

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    return (<MyPosts updateNewPostText={onChangePost}
                     addPost={addPost}
                     posts={state.posts}
                     newPostText={state.newPostText}
                     comments={state.comments}/>)
};

export default MyPostsContainer;