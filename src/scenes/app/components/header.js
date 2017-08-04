import preact from 'preact';
import { Col } from 'reactstrap';

// CSS ---------------------------------------------------------------------- //

//import styles from './header.css';

// -------------------------------------------------------------------------- //

class Header extends preact.Component {
  render() {
    return (
      <div>
        <Col xs="auto">
          <p>Dashboard</p>
        </Col>
        <Col xs="auto">
          <p>Other Stuff</p>
        </Col>
      </div>
    );
  }
}

export default Header;