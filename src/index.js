import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router,Route,IndexRoute,browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk'

import App from './components/app';
import Signin from "./components/auth/signin"
import Signout from "./components/auth/signout"
import Signup from "./components/auth/signup"
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Router path="/" component={App}>
        <Router path="signin" component={Signin}/>
        <Router path="signout" component={Signout}/>
        <Router path="signup" component={Signup}/>
      </Router>
    </Router>
  </Provider>
  , document.querySelector('.container'));
