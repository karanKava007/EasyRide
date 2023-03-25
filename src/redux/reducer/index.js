import { combineReducers } from "redux";
import{Counter} from "./Counter.reducer";
import { postreducer } from "./Post.reducer";

export const rootReducer = combineReducers({
    countDig: Counter,
    postDig : postreducer,
})