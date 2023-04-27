import * as ActionType from '../ActionType'

const initialState = {
    requests: [],
    isLoading: false,
    error: null,
}

export const RequestsReducer = (state = initialState, action) => {
    // console.log("red", action);
    switch (action.type) {
        case ActionType.GET_USER_REQUEST:
            return {
                ...state,
                requests: action.payload,
            }
        case ActionType.SEND_REQUEST:
            return {
                ...state,
                requests: action.payload,
            }
        case ActionType.DELETE_REQUEST:
            return {
                ...state,
                requests: state.requests.filter((i) => i.id !== action.payload),
            }
        default:
            return state
    }
}