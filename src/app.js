import {
  Col,
  Container,
  Row
} from 'reactstrap';

import Config from './config';
import HeaderRow from '_/components/header/header_row';
import PropTypes from '_/proptypes';
import React from 'react';

import styles from './app.css';

// -------------------------------------------------------------------------- //

class App extends React.Component {
  static get propTypes() {
    return {
      ...super.propTypes,
    };
  }

  render() {
    let maxWidth = 12;

    return (
      <Container fluid={true}>
        <HeaderRow title={Config.title} />
        <Row>
          <Col lg={{size: maxWidth}}>
            <Container className={styles.contentBody}>
              <div className='top-content'><p>Lorem Ipsum</p></div>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col lg={{size: maxWidth}}>
            <Container className={styles.footerBody}>
              <p>Lorem Ipsum</p>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

App.childContextTypes = {
  store: PropTypes.object
};

export default App;
