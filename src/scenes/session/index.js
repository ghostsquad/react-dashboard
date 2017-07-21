import React from 'react';

import App from '_/app';

// -------------------------------------------------------------------------- //

const sessionReducer = (state = {}, action) => {
  if (action.type !== 'UNKNOWN'){
    return state;
  }

  return state;
};

// -------------------------------------------------------------------------- //

class Session extends React.Component {
  static get propTypes() {
    return {
      ...super.propTypes,
    };
  }

  render() {
    return (
      <App/>
    );
  }
}

export { Session, sessionReducer };
