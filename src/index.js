import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router,Route,IndexRoute,browserHistory } from 'react-router';

import App from './components/app';
import Signin from "./components/auth/signin"
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Router path="/" component={App}>
        <Router path="signin" component={Signin}/>
      </Router>
    </Router>
  </Provider>
  , document.querySelector('.container'));
