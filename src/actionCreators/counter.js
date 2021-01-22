import CONSTANTS from 'const'

export const increment = () => {
    return {
        type: CONSTANTS.ACTIONS.INCREMENT,
        payload: 3
    }
}

export const decrement = () => ({
    type: CONSTANTS.ACTIONS.DECREMENT,
})

export const decrement2 = () => ({
    type: CONSTANTS.ACTIONS.DECREMENT2,
})