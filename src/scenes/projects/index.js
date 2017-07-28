import preact from 'preact';

import Project from './project/index';

// -------------------------------------------------------------------------- //

class Projects extends preact.Component {
  render() {
    return (<h1>Projects</h1>);
  }
}

const childScenes = [Project];

export { Projects, childScenes };
export default { Projects, childScenes };