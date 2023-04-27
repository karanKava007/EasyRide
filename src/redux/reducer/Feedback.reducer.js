import * as ActionType from '../ActionType'

const initialState = {
    Feedback: [],
    isLoading: false,
    error: null,
}

export const FeedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADD_FEEDBACK:
            return {
                ...state,
                Feedback: action.payload,
            }
        case ActionType.USER_FEEDBACK:
            return {
                ...state,
                Feedback: action.payload,
            }
        default:
            return state
    }
}