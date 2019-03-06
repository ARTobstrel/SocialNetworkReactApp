import {Route} from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import React from "react";



const Content = (props) => {
    return(
        <div className={'App-wrapper-content'}>

            <Route path={'/dialogs'} render={ () => <Dialogs dialogsData={props.messagePage.dialogsData}
                                                             messages={props.messagePage.messages}/>}/>
            <Route path={'/profile'} render={ () => <Profile posts={props.profilePage.posts}
                                                             comments={props.profilePage.comments}/>}/>
            <Route path={'/news'} render={ () => <News/>}/>
            <Route path={'/music'} render={ () => <Music/>}/>
            <Route path={'/settings'} render={ () => <Settings/>}/>

        </div>
    )
};

export default Content;