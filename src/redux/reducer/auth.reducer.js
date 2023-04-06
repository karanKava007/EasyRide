import * as ActionType from '../ActionType';

const initialState = {
    isLoading: false,
    error: '',
    confirm: null,
    user: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.CONFIRM_CODE:
            return {
                ...state,
                confirm: action.payload,
            }
        case ActionType.OTP_VERIFY:
            return {
                ...state,
                user: action.payload,
            }

        case ActionType.LOG_OUT:
            return initialState
        default:
            return state
    }
}