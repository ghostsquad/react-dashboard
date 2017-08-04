import { combineReducers } from 'redux';

import mediaReducer from './media_reducer';

// -------------------------------------------------------------------------- //

const appReducer = combineReducers({
  media: mediaReducer
});

export default appReducer;
