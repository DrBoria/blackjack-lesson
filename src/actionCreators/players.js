import CONSTANTS from 'const'

export const addPlayerActionCreator = (player) => ({
    type: CONSTANTS.ACTIONS.ADD_PLAYER,
    payload: player
})

export const updatePlayerNameActionCreator = (playerId, playerName) => ({
    type: CONSTANTS.ACTIONS.UPDATE_NAME,
    payload: { playerId, playerName }
})
