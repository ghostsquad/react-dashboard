import preact from 'preact';
//import { Navbar, NavbarBrand } from 'reactstrap';
import { Menu } from 'semantic-ui-react';
import { Link, Route } from 'react-router-dom';
import { arrayOf, shape } from 'prop-types';

//import config from '_/config';

// CSS ---------------------------------------------------------------------- //

import 'semantic-ui-css/components/menu.min.css';
//import styles from './nav.css';

// -------------------------------------------------------------------------- //

class Nav extends preact.Component {
  static propTypes() {
    return {
      ...super.propTypes,
      routes: arrayOf(shape).isRequired
    };
  }

  render(props) {
    const { routes } = props;

    return (
      <Route>
        {
          (match) =>
            <Menu pointing secondary vertical>
              {
                routes.map(route =>
                  <Menu.Item key={route.path} name={route.display} as={Link} to={route.path} active={match.location.pathname === route.path} />
                )
              }
            </Menu>
        }
      </Route>
    );
  }
}

export default Nav;
