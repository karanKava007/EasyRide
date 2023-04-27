import * as ActionType from '../ActionType'

const initialState = {
    user: [],
    isLoading: false,
    error: null,
    liveUser:[],
}

export const UserDataReducer = (state = initialState, action) => {
    console.log("red userrrrrrrrrrrrr", action);
    switch (action.type) {
        case ActionType.GET_USER:
            return {
                ...state,
                user: action.payload,
            }
        case ActionType.ADD_USER:
            return {
                ...state,
                user: state.user.concat(action.payload),
            }
        case ActionType.LIVE_USER:
            return {
                ...state,
                liveUser: state.user.concat(action.payload),
            }
        case ActionType.UPDATE_USER:
            return {
                ...state,
                user:action.payload,
            }
        default:
            return state
    }
}