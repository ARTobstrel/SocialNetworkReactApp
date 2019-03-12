import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
    _state: {

        profilePage: {
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
            newPostText: 'Your post!!!!'
        },

        messagePage: {
            dialogsData: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Olga'},
                {id: 4, name: 'Marinochka'},
                {id: 5, name: 'Petya'},
                {id: 6, name: 'Vladlen'},
                {id: 7, name: 'Marusha'},
                {id: 8, name: 'Artem'},
                {id: 9, name: 'Irishka'},
            ],
            messages: [
                {id: 1, message: 'Hi, collaborators!'},
                {id: 2, message: 'Hello, everybody'},
                {id: 3, message: 'Yo, guys'},
                {id: 4, message: 'Boys and girls, i love you'},
            ],
            newMessageText: 'Hello!'
        }

    },

    _callSubscriber() {
        //функция заглушка, в дальнейшем будет переопределена
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;  //Patern Observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogsReducer(this._state.messagePage, action);

        this._callSubscriber(this._state);

    }
};

export let addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export let addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
};

export let updateNewPostTextCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
};

export let updateNewMessageTextCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, newText: text
    }
};

export default store;

window.store = store;