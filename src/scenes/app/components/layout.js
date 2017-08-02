import preact from 'preact';

import {
  Col,
  Container,
  Row
} from 'reactstrap';

import RouteWithSubRoutes from '_/containers/route_with_sub_routes';

// CSS ---------------------------------------------------------------------- //

import styles from './layout.css';

// -------------------------------------------------------------------------- //

class Layout extends preact.Component {
  render(props) {
    const { routes } = props;

    return (
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
          <Col className={styles.sidebar}>
            <Nav routes={routes}/>
          </Col>
          <Col sm="auto">
            {
              routes.map((route, i) =>
                <RouteWithSubRoutes key={i} {...route} />
              )
            }
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Layout;