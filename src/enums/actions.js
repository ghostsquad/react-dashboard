import deepFreeze from 'deep-freeze';

const actions = deepFreeze({
  mediaChanged: 'MEDIA_CHANGED',
  routeChanged: 'ROUTE_CHANGED'
});

export default actions;