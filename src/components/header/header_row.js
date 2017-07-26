import {
  Col,
  Container,
  NavbarBrand,
  Row
} from 'reactstrap';

import Nav from './nav';
import PropTypes from '_/proptypes';
import preact from 'preact';

import styles from './header_row.css';

class HeaderRow extends preact.Component {
  static get propTypes() {
    return {
      ...super.propTypes,
      //match: PropTypes.shape.isRequired,
      maxWidth: PropTypes.number,
      title: PropTypes.string.isRequired
    };
  }

  render(props) {
    const { match, maxWidth, title } = props;

    console.log(props);

    return (
      <Row className={styles.main}>
        <Col md={{size: maxWidth}}>
          <Container className={styles.body}>
            <NavbarBrand href="/">{title}</NavbarBrand>
            Lorem Ipsum
            <Nav match={match}/>
          </Container>
        </Col>
      </Row>
    );
  }
}

export default HeaderRow;
