import {
  Col,
  Container,
  Row
} from 'reactstrap';

import Config from './config';
import HeaderRow from '_/components/header/header_row';
import PropTypes from '_/proptypes';
import preact from 'preact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import styles from './app.css';

// -------------------------------------------------------------------------- //

class Repos extends preact.Component {
  render() {
    return (<h1>Repos</h1>);
  }
}

class About extends preact.Component {
  render() {
    return (<h1>About</h1>);
  }
}

class App extends preact.Component {
  static get propTypes() {
    return {
      ...super.propTypes,
    };
  }

  render() {
    let maxWidth = 12;

    return (
      <Router>
        <Container fluid={true}>
          <Route>
            {(match) => <HeaderRow match={match} title={Config.title} />}

          </Route>
          <Row>
            <Col lg={{size: maxWidth}}>
              <Container className={styles.contentBody}>
                <div className='top-content'><p>Lorem Ipsum</p></div>
              </Container>

              <Route exact path="/" render={() => <h1>Home</h1>}/>
              <Route path="/about" component={About}/>
              <Route path="/repos" component={Repos}/>
            </Col>
          </Row>
          <Row>
            <Col lg={{size: maxWidth}}>
              <Container className={styles.footerBody}>
              </Container>
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
