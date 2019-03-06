import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div>
            <div><img
                src="https://avatars.mds.yandex.net/get-pdb/226447/8a4cc7e7-d85c-4cfd-b4f9-72505a7618fe/s1200?webp=false"
                className={s.side} alt=""/></div>
            <div><img src="https://i.pinimg.com/originals/2a/f7/ea/2af7ea8bbd5d4fa98495a21d409d3f3b.jpg"
                      className={s.face} alt=""/></div>

        </div>
    )
};

export default ProfileInfo;