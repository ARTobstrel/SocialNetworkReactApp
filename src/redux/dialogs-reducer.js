const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


let initialState = {
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
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageText: action.newText
            };

        case ADD_MESSAGE:
            let newMessage = {
                id: 9,
                message: state.newMessageText
            };

            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            };
        default:
            return state;
    }

};

export let addMessageAC = () => {
    return {
        type: ADD_MESSAGE
    }
};

export let updateNewMessageTextAC = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, newText: text
    }
};


export default dialogsReducer;