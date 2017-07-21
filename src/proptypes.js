import T from 'prop-types';

export default {
  ...T,
  page: T.shape({
    title: T.string.isRequired,
    href: T.string.isRequired
  })
};
