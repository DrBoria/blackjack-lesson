import CONSTANTS from 'const';

const counter = (state = { count: 0 }, action) => {
  switch (action.type) {
    case CONSTANTS.ACTIONS.INCREMENT:
      return {
        ...state,
        count: state.count + action.payload
      }
    case CONSTANTS.ACTIONS.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    case CONSTANTS.ACTIONS.DECREMENT2:
      return {
        ...state,
        count: state.count - 2
      }
    default:
      return state
  }
}

export default counter
