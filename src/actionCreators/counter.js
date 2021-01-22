import CONSTANTS from 'const'

export const increment = () => ({
    type: CONSTANTS.ACTIONS.INCREMENT,
})

export const decrement = () => ({
    type: CONSTANTS.ACTIONS.DECREMENT,
})