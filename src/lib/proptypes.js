import T from 'prop-types';

export default {
  ...T,
  page: T.shape({
    name: T.string.isRequired
  })
};
