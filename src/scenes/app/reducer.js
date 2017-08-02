import actions from '_/enums/actions';

const appReducer = (state = {}, action) => {
  const { type, payload } = action;

  if (type === actions.mediaChanged) {
    console.log(payload);
    return state;
  }

  // For now, don't handle any actions
  // and just return the state given to us.
  return state;
};

export default appReducer;
