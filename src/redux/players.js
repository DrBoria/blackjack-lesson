import CONSTANTS from 'const';

const players = (state = [], action) => {
  switch (action.type) {
    case CONSTANTS.ACTIONS.ADD_PLAYER:
      return [...state, action.payload];
    case CONSTANTS.ACTIONS.UPDATE_NAME:
      return state.map(player => {
        if (player.id === action.payload.playerId) {
          player.name = action.payload.playerName
        }
        return player
      });
    default:
      return state;
  }
}

export default players;
