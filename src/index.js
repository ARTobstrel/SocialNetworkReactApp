import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let rerenderEntireTree = () => {
    ReactDOM.render(<App state={store.getState()}
                         dispatch={store.dispatch.bind(store)} />, document.getElementById('root'));
};

rerenderEntireTree(store.getState()); //первичная прорисовка Dom

store.subscribe(rerenderEntireTree); //передаем callback функцию в state

serviceWorker.unregister();
