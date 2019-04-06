import {connect} from "react-redux";
import MyFriends from "./MyFriends";

const mapStateToProps = (state) => {

    return {
        myfriends: state.profilePage.comments
    }
};

const MyFriendsContainer = connect(mapStateToProps)(MyFriends);

export default MyFriendsContainer;