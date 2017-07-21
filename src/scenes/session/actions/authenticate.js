const authenticate = (state = {}, action) => {
  switch (action.type) {
    case 'AUTHENTICATE':
      return {
        authenticated: true
      };
    default:
      return state;
  }
};

export default authenticate;
