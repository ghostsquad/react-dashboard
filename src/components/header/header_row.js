import {
  Col,
  Container,
  NavbarBrand,
  Row
} from 'reactstrap';

import Component from '_/lib/component';
import Nav from './nav';
import PropTypes from '_/lib/proptypes';
import React from 'react';

import styles from './header_row.css';

class HeaderRow extends Component {
  static get propTypes() {
    return {
      ...super.propTypes,
      maxWidth: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      pages: PropTypes.arrayOf(PropTypes.page)
    };
  }

  render() {
    const { props } = this;
    const { maxWidth, title, pages } = props;

    return (
      <Row className={styles.main}>
        <Col md={{size: maxWidth}}>
          <Container className={styles.body}>
            <NavbarBrand href="/">{title}</NavbarBrand>
            <Nav pages={pages}/>
          </Container>
        </Col>
      </Row>
    );
  }
}

export default HeaderRow;
