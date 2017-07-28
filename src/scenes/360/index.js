import preact from 'preact';

import {
  Container,
} from 'reactstrap';

import { Link, Route } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/components/menu.min.css';

import Active from './active/index';
import Pipeline from './pipeline/index';
import Recent from './recent/index';

// -------------------------------------------------------------------------- //

class ThreeSixty extends preact.Component {
  render(props) {
    const { routes } = props;

    return (
      <Container>
        <h1>360</h1>
        <Route>
          {
            (match) =>
              <Menu tabular>
                {
                  [Active, Pipeline, Recent].map(component =>
                    <Menu.Item key={route.path} name={route.display} as={Link} to={route.path} active={match.location.pathname === route.path} />
                  )
                }
              </Menu>
          }

          <Menu tabular>
            <Menu.Item />
          </Menu>
        </Route>
      </Container>
    );
  }
}

const childScenes = () => {
  return [Active, Recent, Pipeline];
};

export { ThreeSixty, childScenes };
export default { ThreeSixty, childScenes };