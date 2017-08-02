import actions from '_/enums/actions';

const widths = [
  {
    limit: 'max',
    px: 575,
    bootstrapClass: 'xs'
  },
  {
    limit: 'min',
    px: 576,
    bootstrapClass: 'sm'
  },
  {
    limit: 'min',
    px: 768,
    bootstrapClass: 'md'
  },
  {
    limit: 'min',
    px: 992,
    bootstrapClass: 'lg'
  },
  {
    limit: 'min',
    px: 1200,
    bootstrapClass: 'xl'
  }
];

const dispatchAction = (dispatch, widthData, eventData) => {
  dispatch({
    type: actions.mediaChanged,
    payload: Object.assign({}, {...widthData}, { matches: eventData.matches })
  });
};

const dispatchMediaQueryChanges = (dispatch) => {
  // https://www.w3schools.com/jsref/met_win_matchmedia.asp
  // matching the same query as bootstrap
  // https://v4-alpha.getbootstrap.com/layout/grid/#grid-options
  widths.forEach((width) => {
    const matchMedia = window.matchMedia(`(${width.limit}-width: ${width.px}px)`);

    // Run it once on startup
    dispatchAction(dispatch, width, matchMedia);

    matchMedia.addListener(() => {
      dispatchAction(dispatch, width, matchMedia);
    });
  });
};

export default dispatchMediaQueryChanges;