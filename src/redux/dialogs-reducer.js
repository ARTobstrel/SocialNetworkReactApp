const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.newText;
            return state;
        case ADD_MESSAGE:
            let newMessage = {
                id: 9,
                message: state.newMessageText
            };

            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        default:
            return state;
    }

};

export let addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
};

export let updateNewMessageTextCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, newText: text
    }
};


export default dialogsReducer;