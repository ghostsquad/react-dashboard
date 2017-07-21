import {
  Col,
  Container,
  NavbarBrand,
  Row
} from 'reactstrap';

import Nav from './nav';
import PropTypes from '_/proptypes';
import React from 'react';

import styles from './header_row.css';

class HeaderRow extends React.Component {
  static get propTypes() {
    return {
      ...super.propTypes,
      maxWidth: PropTypes.number,
      title: PropTypes.string.isRequired
    };
  }

  render() {
    const { props } = this;
    const { maxWidth, title } = props;

    return (
      <Row className={styles.main}>
        <Col md={{size: maxWidth}}>
          <Container className={styles.body}>
            <NavbarBrand href="/">{title}</NavbarBrand>
            Lorem Ipsum
            <Nav/>
          </Container>
        </Col>
      </Row>
    );
  }
}

export default HeaderRow;
