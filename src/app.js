import {
  Col,
  Container,
  Row
} from 'reactstrap';

import Nav from '_/components/nav';
import PropTypes from '_/proptypes';
import preact from 'preact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import config from '_/config';

import styles from './app.css';

// -------------------------------------------------------------------------- //

const RouteWithSubRoutes = (route) => (
  <Route {...route.props} path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
);

class App extends preact.Component {
  static get propTypes() {
    return {
      ...super.propTypes,
    };
  }

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
            <Col xs="auto" md="auto">
              <Nav routes={config.routes}/>
            </Col>
            <Col sm="auto">
              {
                config.routes.map((route, i) =>
                  <RouteWithSubRoutes key={i} {...route} />
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
