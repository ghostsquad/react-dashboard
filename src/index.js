import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Session, sessionReducer } from '_/scenes/session/index';

// -------------------------------------------------------------------------- //

const store = createStore(sessionReducer);

const provider = (
  <Provider store={store}>
    <Session/>
  </Provider>
);

// -------------------------------------------------------------------------- //

const getContainer = () => document.querySelector('#app');

const container = getContainer();

if (container) {
  ReactDOM.render(provider, container);
} else {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(provider, getContainer());
  });
}
