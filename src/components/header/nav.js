import {
  Collapse,
  NavItem,
  NavLink,
  Navbar,
  NavbarToggler,
  Nav as ReactNav
} from 'reactstrap';

import Component from '_/lib/component';
import PropTypes from '_/lib/proptypes';
import React from 'react';

import styles from './nav.css';

class Nav extends Component {
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

  render() {
    return (
      <Navbar className={styles.main} color="faded" light toggleable>
        <NavbarToggler left onClick={this.toggle}/>
        <Collapse navbar isOpen={this.state.isOpen}>
          <ReactNav tabs>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
            </NavItem>
          </ReactNav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Nav;
