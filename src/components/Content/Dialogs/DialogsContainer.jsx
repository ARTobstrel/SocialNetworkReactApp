import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageTextCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";


let mapStateProps = (state) => {
    return {
        dialogsData: state.messagePage.dialogsData,
        messages: state.messagePage.messages,
        newMessageText: state.messagePage.newMessageText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onChangePost: (text) => {
            dispatch(updateNewMessageTextCreator(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
};

const DialogsContainer = connect(mapStateProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;