import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router,Route,IndexRoute,browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import {AUTH_USER} from './actions/types';

import App from './components/app';
import Signin from "./components/auth/signin";
import Signout from "./components/auth/signout";
import Signup from "./components/auth/signup";
import Feature from "./components/feature";
import RequireAuth from "./components/auth/require_auth";
import Welcome from "./components/welcome";
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
if(token){
  store.dispatch({type: AUTH_USER});
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Router path="/" component={App}>
        <IndexRoute component={Welcome}/>
        <Router path="signin" component={Signin}/>
        <Router path="signout" component={Signout}/>
        <Router path="signup" component={Signup}/>
        <Router path="feature" component={RequireAuth(Feature)}/>
      </Router>
    </Router>
  </Provider>
  , document.querySelector('.container'));
