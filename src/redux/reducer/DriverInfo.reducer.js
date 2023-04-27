import { log } from 'react-native-reanimated';
import * as ActionType from '../ActionType'

const initialState = {
    driver: [],
    isLoading: false,
    error: null,
    driverLive:[],
}

export const DriverReducer = (state = initialState, action) => {
    console.log('driverrrrrrrreducerrrrrrr', action);
    switch (action.type) {
        case ActionType.GET_DRIVER:
            return {
                ...state,
                driver: action.payload,
            }
        case ActionType.ADD_DRIVER:
            console.log("ooookkkkkkkkkkkkkkkkkkk");
            return {
                ...state,
                driver: state.driver.concat(action.payload),
            }
        case ActionType.LIVE_DRIVER:
            console.log("ooookkkkkkkkkkkkkkkkkkk");
            return {
                ...state,
                driverLive: state.driver.concat(action.payload),
            }
        case ActionType.UPDATE_DRIVER:
            return {
                ...state,
                driver: action.payload,
                // driver: state.driver.map((i) => {
                //     if (i.id === action.payload.id) {
                //         return action.payload
                //     } else {
                //         return i
                //     }
                // })
            }
        default:
            return state
    }
}