import { combineReducers } from 'redux';

import mediaReducer from './media_reducer';
import routeReducer from './route_reducer';

// -------------------------------------------------------------------------- //

const appReducer = combineReducers({
  media: mediaReducer,
  routes: routeReducer
});

export default appReducer;
