import CONSTANTS from 'const';

const ui = (state = { loading: false }, action) => {
  switch (action.type) {
    case CONSTANTS.ACTIONS.LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state
  }
}

export default ui;
