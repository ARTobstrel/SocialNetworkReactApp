const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


const dialogsReducer = (state, action) => {

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageText = action.newText;
    } else if (action.type === ADD_MESSAGE) {
        let newMessage = {
            id: 9,
            message: state.newMessageText
        };

        state.messages.push(newMessage);
        state.newMessageText = '';
    }

    return state;
};


export default dialogsReducer;