import threeSixty from '_/scenes/360/index';
import projects from '_/scenes/projects/index';

// -------------------------------------------------------------------------- //

export default Object.freeze({
  title: 'Dashboard',
  routes: [
    {
      path: '/',
      display: '360',
      component: threeSixty.ThreeSixty,
      props: {
        exact: true
      },
      routes: [
        {
          path: '/360/active',
          display: 'Active',
          component: threeSixty.Active
        },
        {
          path: '/360/pipeline',
          display: 'Pipelines',
          component: threeSixty.Pipeline
        },
        {
          path: '/360/recent',
          display: 'Recent',
          component: threeSixty.Recent
        }
      ]
    },
    {
      path: '/projects',
      display: 'Projects',
      component: projects.Projects,
      routes: [
        {
          path: '/projects/:project',
          display: ':project',
          component: projects.Project
        }
      ]
    }
  ]
});
