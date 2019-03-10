import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import Content from "./components/Content/Content";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className={'App-wrapper'}>

                <Header/>
                <Navbar myfriends={props.state.profilePage}/>
                <Content profilePage={props.state.profilePage}
                         messagePage={props.state.messagePage}
                         dispatch={props.dispatch}/>

            </div>

        </BrowserRouter>);
};

export default App;
