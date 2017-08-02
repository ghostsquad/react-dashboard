import preact from 'preact';

import {
  Container,
} from 'reactstrap';

//import { Link, Route } from 'react-router-dom';

//import { Menu } from 'semantic-ui-react';

import Active from './active/index';
import Pipeline from './pipeline/index';
import Recent from './recent/index';

// -------------------------------------------------------------------------- //

class ThreeSixty extends preact.Component {
  render() {

    return (
      <Container>
        <h1>360</h1>
      </Container>
    );
  }
}

const childScenes = () => {
  return [Active, Recent, Pipeline];
};

export { ThreeSixty, childScenes };
export default { ThreeSixty, childScenes };