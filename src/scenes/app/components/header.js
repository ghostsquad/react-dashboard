import preact from 'preact';
import { Col, Row } from 'reactstrap';

// CSS ---------------------------------------------------------------------- //

import styles from './header.css';

// -------------------------------------------------------------------------- //

class Header extends preact.Component {
  render() {
    return (
      <Row className={`${styles.row} justify-content-between`}>
        <Col xs="auto">
          <p>Dashboard</p>
        </Col>
        <Col xs="auto">
          <p>Other Stuff</p>
        </Col>
      </Row>
    );
  }
}

export default Header;