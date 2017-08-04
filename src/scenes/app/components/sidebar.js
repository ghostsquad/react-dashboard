import preact from 'preact';
import { Col } from 'reactstrap';
//import { connect } from 'react-redux';

// CSS ---------------------------------------------------------------------- //

import styles from './sidebar.css';

// -------------------------------------------------------------------------- //

class Sidebar extends preact.Component {
  render(props) {
    const { sm, children } = props;

    return (
      <Col sm={sm} className={styles.sidebar}>
        {children}
      </Col>
    );
  }
}
//
//export default connect(
//  //mapStateToProps,
//  (state) => {
//    return {
//      isOpen: !state.app.media.xs.matches
//    };
//  }
//  // mapDispatchToProps,  that's another subject
//)(Sidebar);

export default Sidebar;