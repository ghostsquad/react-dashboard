// This is our entry point
// It is in charge of
//  * creating the store
//  * hooking up our root reducer to the store
//  * and hooking up to document body

import 'bootstrap/dist/css/bootstrap.css';
import preact from 'preact';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import dispatchMediaQueryChanges from './services/dispatch_media_query_changes';

import { App, appReducer } from '_/scenes/app';

// CSS ---------------------------------------------------------------------- //

import '_static/semantic.paper.css';
import '_/index.css';

// -------------------------------------------------------------------------- //

const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    app: appReducer,
    router: routerReducer
  }),
  /* preloadedState, */
  composeWithDevTools(
    applyMiddleware(middleware)
    // other store enhancers if any
  )
);

dispatchMediaQueryChanges(store.dispatch);

const provider = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
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
