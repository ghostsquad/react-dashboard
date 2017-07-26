import {
  Collapse,
  NavItem,
  NavLink,
  Navbar,
  NavbarToggler,
  Nav as ReactNav
} from 'reactstrap';

import { Link } from 'react-router-dom';

//import PropTypes from '_/proptypes';
import preact from 'preact';

import styles from './nav.css';

class Nav extends preact.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(props) {
    //const { props } = this;
    //const { pages } = props;

    console.log(props);

    const { match } = props;

    return (
      <Navbar className={styles.main} color="faded" light toggleable>
        <NavbarToggler left onClick={this.toggle}/>
        <Collapse navbar isOpen={this.state.isOpen}>
          <ReactNav tabs>
            <NavItem>
              <NavLink tag={Link} to="/" active={match.location.pathname === '/'}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/repos" active={match.location.pathname === '/repos'}>Repos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about" active={match.location.pathname === '/about'}>About</NavLink>
            </NavItem>
          </ReactNav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Nav;
