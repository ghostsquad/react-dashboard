import preact from 'preact';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

// CSS ---------------------------------------------------------------------- //

import styles from './nav.css';

// -------------------------------------------------------------------------- //

class Nav extends preact.Component {
  render(props) {
    const { routes, match } = props;

    return (
      <Menu pointing secondary vertical fluid>
        {
          routes.map(route =>
            <Menu.Item
              key={route.path}
              name={route.display}
              as={Link}
              to={route.path}
              active={match.location.pathname === route.path}
              className={styles.menu_item}
            />
          )
        }
      </Menu>
    );
  }
}

export default connect(
  //mapStateToProps,
  (state) => {
    return {
      isOpen: !state.app.media.xs.matches
    };
  }
  // mapDispatchToProps,  that's another subject
)(Nav);
