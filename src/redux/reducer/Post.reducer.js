import * as ActionType from '../ActionType';

const Initialstate = {
    post: [],
    isLoading: false,
    error: null,
}

export const postreducer = (state = Initialstate, action) => {
    switch (action.type) {
        case ActionType.GET_METHOD:
            return {
                ...state,
                post: action.payload,
            }
        case ActionType.ADD_METHOD:
            return {
                ...state,
                post: state.post.concat(action.payload),
            }
        case ActionType.DELETE_METHOD:
            return {
                ...state,
                post: state.post.filter((i) => i.id !== action.payload)
            }
        case ActionType.UPDATE_METHOD:
            return {
                ...state,
                post: state.post.map((p) =>{
                // return p.id === action.payload.id ?  action.payload : p
                    if(p.id === action.payload.id){
                        return action.payload
                    }else{
                        return p
                    }
                })
            }
        default:
            return state
    }
}