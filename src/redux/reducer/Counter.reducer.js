// import { INCREMENT_REDUCER ,DECREMENT_REDUCER} from "../ActionType"
import * as ActionType from '../ActionType';
const initialState = {
    count: 0,
}
export const Counter = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.INCREMENT_REDUCER:
            return {
                ...state, count: state.count + 1,
            }

        case ActionType.DECREMENT_REDUCER:
            return {
                ...state, count: state.count - 1,
            }
        default:
            return state
    }
}