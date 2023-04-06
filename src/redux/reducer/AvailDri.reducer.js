import * as ActionType from '../ActionType'

const initialState = {
    availableDriver: [],
    isLoading: false,
    error: null,
}

export const AvailDriverReducer = (state = initialState, action) => {
    // console.log('reducerghhhhh',action);
    switch (action.type) {
        case ActionType.AVAILABLE_DRIVER:
            return {
                ...state,
                availableDriver: action.payload,
            }
        default:
            return state
    }
}