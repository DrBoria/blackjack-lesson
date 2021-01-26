import CONSTANTS from 'const';

const initialState = {
  mediumPhoto: []
}

const photo = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ACTIONS.PHOTOS:
      return {
        ...state,
        mediumPhoto: action.payload
      }
    default:
      return state
  }
}

export default photo;
