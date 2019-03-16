const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts: [
        {id: 1, post: 'This is my first post. Like me'},
        {id: 2, post: 'Today i went for a work with my dog'},
        {id: 3, post: 'Beautiful day!!! Hello everybody'},
        {id: 4, post: 'Who love me?'},
    ],
    comments: [
        {
            id: 1,
            name: 'Olga',
            comment: 'Hello, everybody',
            src_img: 'https://im0-tub-ru.yandex.net/i?id=6f4c24aac7bb84ea30927ed4368b41b1-l&n=13'
        },
        {
            id: 2,
            name: 'Yarik',
            comment: 'Hi, guys',
            src_img: 'https://im0-tub-ru.yandex.net/i?id=d7cdc01cf1bce825487cf13dad31b0ad-l&n=13'
        },
        {
            id: 3,
            name: 'Petya',
            comment: 'Iam glad',
            src_img: 'https://im0-tub-ru.yandex.net/i?id=b34c92cbe33c28f6692013fc1de0a203-l&n=13'
        },
        {
            id: 4,
            name: 'Tigran',
            comment: 'fuck you all',
            src_img: 'https://im0-tub-ru.yandex.net/i?id=0ecf55701e43c5edfeaee879ebd5001d-l&n=13'
        },
    ],
    newPostText: ''
};

const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

};


export let addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export let updateNewPostTextCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
};

export default profileReducer;