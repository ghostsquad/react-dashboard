import T from 'prop-types';

export default {
  ...T,
  page: T.shape({
    title: T.string.isRequired,
    href: T.string.isRequired
  }),
  route: T.shape({
    path: T.string.isRequired,
    display: T.string.isRequired,
    component: T.object,
    props: T.object,
    routes: T.arrayOf(this)
  }),
};
