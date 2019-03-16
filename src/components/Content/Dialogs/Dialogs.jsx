import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextCreator} from "../../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsData
        .map((d) =>
            <DialogItem name={d.name} id={d.id}/>
        );

    let messagesElements = props.messages
        .map((m) =>
            <Message message={m.message}/>
        );

    let messageElement = React.createRef();

    let onChangePost = () => {
        let text = messageElement.current.value;
        let action = updateNewMessageTextCreator(text);
        props.dispatch(action);
    };

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    return (
        <div className={s.dialogs}>

            <div className={s.dialog_item}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}

                <div>
                    <div><textarea onChange={onChangePost} ref={messageElement} value={props.newMessageText}/></div>
                    <div>
                        <button onClick={addMessage}>send</button>
                    </div>
                </div>
            </div>


        </div>

    )
};

export default Dialogs;