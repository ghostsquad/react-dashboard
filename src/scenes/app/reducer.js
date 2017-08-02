const appReducer = (state = {}, action) => {
  if (typeof action === 'undefined') {
    return state;
  }

  // For now, don't handle any actions
  // and just return the state given to us.
  return state;
};

export default appReducer;
