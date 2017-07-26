import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import preact from 'preact';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from '_/app';

// -------------------------------------------------------------------------- //

const reducer = (state = {}, action) => {
  if (action) {
    return state;
  }

  return state;
};

const store = createStore(reducer);

const provider = (
  <Provider store={store}>
    <App/>
  </Provider>
);

// -------------------------------------------------------------------------- //

// root holds our app's root DOM Element:
let root;

function init() {
  root = preact.render(provider, document.body, root);
}

if (root) {
  init();
} else {
  document.addEventListener('DOMContentLoaded', () => {
    init();
  });
}

// example: Re-render on Webpack HMR update:
//if (module.hot) module.hot.accept('./app', init);
