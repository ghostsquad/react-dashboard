// App is the root component that renders all scenes

import preact from 'preact';

import {
  Col,
  Container,
  Row
} from 'reactstrap';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import PropTypes from 'prop-types';

import Nav from './components/nav';
import RouteWithSubRoutes from '_/containers/route_with_sub_routes';

import appReducer from './reducer';

import config from '_/config';

// CSS ---------------------------------------------------------------------- //

import styles from './index.css';

// -------------------------------------------------------------------------- //

class App extends preact.Component {

  render() {
    return (
      <Router>
        <Container fluid={true}>
          <Row className={`${styles.header} justify-content-between`}>
            <Col xs="auto">
              <p>Dashboard</p>
            </Col>
            <Col xs="auto">
              <p>Other Stuff</p>
            </Col>
          </Row>
          <Row>
            <Col xs="2">
              <Route>
                {(match) =>
                  <Nav routes={config.routes} match={match}/>
                }
              </Route>
            </Col>
            <Col sm="auto">
              {
                config.routes.map((route, i) =>
                  <RouteWithSubRoutes key={i} route={route} />
                )
              }
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

App.childContextTypes = {
  store: PropTypes.object
};

export default App;
export { App, appReducer };
