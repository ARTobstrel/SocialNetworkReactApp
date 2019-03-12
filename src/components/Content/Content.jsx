import {Route} from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import React from "react";
import About from "./About/About";


const Content = (props) => {
    return(
        <div className={'App-wrapper-content'}>



            <Route path={'/dialogs'} render={ () => <Dialogs dialogsData={props.messagePage.dialogsData}
                                                             messages={props.messagePage.messages}
                                                             newMessageText={props.messagePage.newMessageText}
                                                             dispatch={props.dispatch}/>}/>
            <Route path={'/profile'} render={ () => <Profile posts={props.profilePage.posts}
                                                             comments={props.profilePage.comments}
                                                             newPostText={props.profilePage.newPostText}
                                                             dispatch={props.dispatch}/>}/>
            <Route path={'/news'} render={ () => <News/>}/>
            <Route path={'/music'} render={ () => <Music/>}/>
            <Route path={'/settings'} render={ () => <Settings/>}/>

            <Route path={'/about'} render={ () => <About/>}/>

        </div>
    )
};

export default Content;