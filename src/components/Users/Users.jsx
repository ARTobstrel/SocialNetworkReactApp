import React from 'react';
import s from './Users.module.css';
import * as axios from "axios";


let Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });
    }


    return <div>
        {
            props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <img
                                src={u.photos.small != null ? u.photos.small : "http://sync-storage.com/wp-content/uploads/2016/02/Icon-Doctor.png"}
                                className={s.userPhoto} alt=""/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"location"}</div>
                            <div>{"city"}</div>
                        </span>
                    </span>
                </div>)
        }
    </div>
};

export default Users;