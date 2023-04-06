import * as ActionType from '../ActionType';
import auth from '@react-native-firebase/auth';

export const ConfirmPhoneAuth = (data) => async (dispatch)=> {
    const confirmation = await auth().signInWithPhoneNumber("+91"+data);
    dispatch({type:ActionType.CONFIRM_CODE,payload:confirmation})
}

export const verifyOTP = (confirmdata, data) => async (dispatch) => {
    try {
        let userData = await confirmdata.confirm(data);
        console.log("actttttt", userData.user.uid, userData.uid);
        dispatch({ type: ActionType.OTP_VERIFY, payload: userData.user.uid });
    } catch (error) {
        console.log('Invalid code.');
    }
}

export const logOutUser = () => async (dispatch) => {
    try {
        await auth().signOut()
        dispatch({ type: ActionType.LOG_OUT })
    } catch (error) {
        console.log('Log Out Failed');
    }
}