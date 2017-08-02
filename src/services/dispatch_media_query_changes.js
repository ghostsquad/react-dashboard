import actions from '_/enums/actions';

const widths = [
  {
    limit: 'max',
    px: 575
  },
  {
    limit: 'min',
    px: 576
  },
  {
    limit: 'min',
    px: 768
  },
  {
    limit: 'min',
    px: 992
  },
  {
    limit: 'min',
    px: 1200
  }
];

const dispatchMediaQueryChanges = (dispatch) => {
  // https://www.w3schools.com/jsref/met_win_matchmedia.asp
  // matching the same query as bootstrap
  // https://v4-alpha.getbootstrap.com/layout/grid/#grid-options
  widths.forEach((width) => {
    const matchMedia = window.matchMedia(`(${width.limit}-width: ${width.px}px)`);
    matchMedia.addListener((mediaQueryListEvent) => {
      dispatch({
        type: actions.mediaChanged,
        payload: mediaQueryListEvent
      });
    });
  });
};

export default dispatchMediaQueryChanges;