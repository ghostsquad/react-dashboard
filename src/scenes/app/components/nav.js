import preact from 'preact';
import { Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button, Menu } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

// CSS ---------------------------------------------------------------------- //

import styles from './nav.css';

// -------------------------------------------------------------------------- //

class Nav extends preact.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(props) {
    const { routes, match } = props;

    return (
      <MediaQuery minWidth={600}>
        {(matches) => {
          this.state.isOpen = matches;

          return (
            <div>
              <Collapse isOpen={!this.state.isOpen}>
               <Button icon='sidebar' onClick={this.toggle}/>
              </Collapse>
              <Collapse isOpen={this.state.isOpen}>
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
              </Collapse>
            </div>
          );
        }}
      </MediaQuery>
    );
  }
}

export default Nav;
