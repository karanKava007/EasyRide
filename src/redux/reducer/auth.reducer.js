import * as ActionType from '../ActionType';

const initialState = {
    isLoading: false,
    error: '',
    confirm: null,
    user: null,
}

export const authReducer = (state = initialState, action) => {
    console.log('auth reducerrrrr', action);
    switch (action.type) {
        case ActionType.CONFIRM_CODE:
            return {
                ...state,
                error: '',
                confirm: action.payload,
            }
        case ActionType.OTP_VERIFY:
            return {
                ...state,
                error: '',
                user: action.payload,
            }
        case ActionType.INVALID_OTP:
            return {
                ...state,
                error: action.payload,
            }

        case ActionType.LOG_OUT:
            return initialState
        default:
            return state
    }
}