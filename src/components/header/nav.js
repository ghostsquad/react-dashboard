import {
  Collapse,
  NavItem,
  NavLink,
  Navbar,
  NavbarToggler,
  Nav as ReactNav
} from 'reactstrap';

import PropTypes from '_/proptypes';
import React from 'react';

import styles from './nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  static get propTypes() {
    return {
      ...super.propTypes,
      pages: PropTypes.arrayOf(PropTypes.page)
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  nav_items(pages) {
    pages.forEach((p) => {
      return (
        <NavItem>
          <NavLink href={p.href}>{p.title}</NavLink>
        </NavItem>
      );
    });
  }

  render() {
    //const { props } = this;
    //const { pages } = props;

    return (
      <Navbar className={styles.main} color="faded" light toggleable>
        <NavbarToggler left onClick={this.toggle}/>
        <Collapse navbar isOpen={this.state.isOpen}>
          <ReactNav tabs>Lorem Ipsum</ReactNav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Nav;
