import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer'

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss";
import "assets/demo/demo.css";

import Dashboard from "./views/Dashboard/index.jsx";

const store = createStore(rootReducer, applyMiddleware(thunk));
const hist = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={hist}>
            <Switch>
            <Route path="/public" render={props => <Dashboard {...props} />} />
            <Redirect to="/public/dashboard" />
            </Switch>
        </Router>,
    </Provider>, document.getElementById("root")
);
