import CONSTANTS from 'const';

const counter = (state = { count: 0 }, action) => {
  switch (action.type) {
    case CONSTANTS.ACTIONS.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case CONSTANTS.ACTIONS.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

export default counter
