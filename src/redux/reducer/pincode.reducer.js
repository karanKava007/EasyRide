import * as ActionType from '../ActionType'

const initialState = {
    PinCodes: [],
    isLoading: false,
    error: null,
}

export const PinCodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_PIN:
            return {
                ...state,
                PinCodes: action.payload,
            }
        default:
            return state
    }
}