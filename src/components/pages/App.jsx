import Navbar from "../Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import {applyMiddleware, createStore} from 'redux';
import rootReducers from "../../reducers/index";
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import Car from "../Car";
import User from "../User";
import rootSaga from '../../sagas/index'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);


function App() {
    return (
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
    );
}

export default App;



