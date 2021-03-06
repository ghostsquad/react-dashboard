import actions from '_/enums/actions';

// -------------------------------------------------------------------------- //

const mediaReducer = (state = {}, action) => {
  const { type, payload } = action;

  if (type === actions.mediaChanged) {
    const mediaState = {};
    mediaState[payload.bootstrapClass] = payload;

    const newState = Object.assign({}, {...state}, mediaState);
    return newState;
  }

  // For now, don't handle any actions
  // and just return the state given to us.
  return state;
};

export default mediaReducer;
