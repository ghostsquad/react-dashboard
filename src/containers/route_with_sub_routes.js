import preact from 'preact';
import { Route } from 'react-router-dom';

// -------------------------------------------------------------------------- //

class RouteWithSubRoutes extends preact.Component {
  render(props) {
    const { route } = props;

    return (
      <Route {...route.props} path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} parent_path={route.path} routes={route.routes}/>
      )}
      />);
  }
}

export default RouteWithSubRoutes;

