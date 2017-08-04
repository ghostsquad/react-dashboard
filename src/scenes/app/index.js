// App is the root component that renders all scenes

import preact from 'preact';

import {
  Container,
  Row
} from 'reactstrap';

import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import appReducer from './reducer';
import config from '_/config';
import Nav from './components/nav';
import RouteWithSubRoutes from '_/containers/route_with_sub_routes';

import Header from './components/header';
import Sidebar from './components/sidebar';
import Content from './components/content';

// CSS ---------------------------------------------------------------------- //

import styles from './index.css';

// -------------------------------------------------------------------------- //


class App extends preact.Component {
  render() {
    return (
      <Container fluid={true}>
        <Row className={`${styles.header} justify-content-between`}>
          <Header />
        </Row>
        <Row>
          <Sidebar xs="auto" className={styles.sidebar}>
            <Route>
              {(match) =>
                <Nav routes={config.routes} match={match}/>
              }
            </Route>
          </Sidebar>
          <Content>
            {
              config.routes.map((route, i) =>
                <RouteWithSubRoutes key={i} route={route} />
              )
            }
          </Content>
        </Row>
      </Container>
    );
  }
}

App.childContextTypes = {
  store: PropTypes.object
};

export default App;
export { App, appReducer };
