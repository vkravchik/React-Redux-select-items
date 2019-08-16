import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from 'redux';
import rootReducers from "./reducers";
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Car from "./components/Car";
import Navbar from "./components/Navbar";
import User from "./components/User";
import rootSaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <Navbar/>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/autos" component={Car}/>
                <Route exact path="/user" component={User}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
