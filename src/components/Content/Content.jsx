import {Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import React from "react";
import About from "./About/About";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";


const Content = () => {
    return (
        <div className={'App-wrapper-content'}>

            <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
            <Route path={'/profile'} render={() => <Profile/>}/>
            <Route path={'/news'} render={() => <News/>}/>
            <Route path={'/music'} render={() => <Music/>}/>
            <Route path={'/settings'} render={() => <Settings/>}/>
            <Route path={'/'} render={() => <About/>}/>
            <Route path={'/users'} render={() => <UsersContainer/>}/>

        </div>
    )
};

export default Content;