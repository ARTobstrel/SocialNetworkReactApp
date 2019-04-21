import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsData
        .map( d =>
            <DialogItem name={d.name} key={d.id} id={d.id}/>
        );

    let messagesElements = props.messages
        .map(m =>
            <Message message={m.message} key={m.id}/>
        );

    let messageElement = React.createRef();

    let onChangePost = () => {
        let text = messageElement.current.value;
        props.onChangePost(text);
    };

    let addMessage = () => {
        props.addMessage();
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