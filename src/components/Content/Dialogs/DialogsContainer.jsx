import Dialogs from "./Dialogs";
import React from "react";
import {addMessageActionCreator, updateNewMessageTextCreator} from "../../../redux/dialogs-reducer";

const DialogsContainer = (props) => {

    let state = props.store.getState().messagePage;

    let onChangePost = (text) => {
        let action = updateNewMessageTextCreator(text);
        props.store.dispatch(action);
    };

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    return (<Dialogs onChangePost={onChangePost}
                     addMessage={addMessage}
                     dialogsData={state.dialogsData}
                     messages={state.messages}
                     newMessageText={state.newMessageText} />)
};

export default DialogsContainer;