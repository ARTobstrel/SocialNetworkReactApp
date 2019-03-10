import React from "react";
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={s.items}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     comments={props.comments}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
};

export default Profile;