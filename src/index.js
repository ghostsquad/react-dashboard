// This is our entry point
// It is in charge of
//  * creating the store
//  * hooking up our root reducer to the store
//  * and hooking up to document body

import 'bootstrap/dist/css/bootstrap.css';
import preact from 'preact';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import dispatchMediaQueryChanges from './services/dispatch_media_query_changes';

import { App, appReducer } from '_/scenes/app';

// CSS ---------------------------------------------------------------------- //

import '_static/semantic.paper.css';
import '_/index.css';

// -------------------------------------------------------------------------- //

const store = createStore(appReducer);

dispatchMediaQueryChanges(store.dispatch);

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
