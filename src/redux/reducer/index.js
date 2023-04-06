import { combineReducers } from "redux";
import { Counter } from "./Counter.reducer";
import { DriverReducer } from "./DriverInfo.reducer";
import { PinCodeReducer } from "./pincode.reducer";
import { postreducer } from "./Post.reducer";
import { UserDataReducer } from "./UserReg.reducer";
import { authReducer } from "./auth.reducer";
import { AvailDriverReducer } from "./AvailDri.reducer";

export const rootReducer = combineReducers({
    countDig: Counter,
    postDig: postreducer,
    DivReducer: DriverReducer,
    pincode: PinCodeReducer,
    userReducer: UserDataReducer,
    auth:authReducer,
    availDri: AvailDriverReducer,
})
