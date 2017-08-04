import preact from 'preact';
import { Col } from 'reactstrap';

// CSS ---------------------------------------------------------------------- //

//import styles from './sidebar.css';

// -------------------------------------------------------------------------- //

class Content extends preact.Component {
  render(props) {
    const { children } = props;

    return (
      <Col xs>
        {children}
      </Col>
    );
  }
}

export default Content;