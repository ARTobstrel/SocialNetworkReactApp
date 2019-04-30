import Dialogs from "./Dialogs";
import {addMessageAC, updateNewMessageTextAC} from "../../../redux/dialogs-reducer";
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
            dispatch(updateNewMessageTextAC(text))
        },
        addMessage: () => {
            dispatch(addMessageAC());  //AC - Action Creator
        }
    }
};

const DialogsContainer = connect(mapStateProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;