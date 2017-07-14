import {
  Col,
  Container,
  Row
} from 'reactstrap';

import Component from '_/lib/component';
import Config from './config';
import HeaderRow from '_/components/header/header_row';

import React from 'react';

import styles from './app.css';

class App extends Component {
  render() {
    let maxWidth = 12;

    return (
      <Container fluid={true}>
        <HeaderRow maxWidth={maxWidth} title={Config.title} pages={Config.pages}/>
        <Row>
          <Col lg={{size: maxWidth}}>
            <Container className={styles.contentBody}>
              <div className={this.bem('top-content')}><p>Lorem Ipsum</p></div>
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

export default App;
