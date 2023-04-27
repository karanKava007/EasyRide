import * as ActionType from '../ActionType';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const ConfirmPhoneAuth = (data) => async (dispatch) => {
    const confirmation = await auth().signInWithPhoneNumber("+91" + data);
    dispatch({ type: ActionType.CONFIRM_CODE, payload: confirmation })
}

export const verifyOTP = (confirmdata, data, nav) => async (dispatch) => {
    console.log("oooooooooooooooooooooooooo");
    try {
        let userData = await confirmdata.confirm(data);
        console.log("acttttttuuuuuuuuuuuuuuu", userData.user);

        // let userdata1 = [];

        // await firestore()
        //     .collection('User')
        //     .get()
        //     .then(querySnapshot => {
        //         // console.log('Total Driver: ', querySnapshot.size);
        //         querySnapshot.forEach(documentSnapshot => {
        //             if (userData.user.uid === documentSnapshot.data().uid) {
        //                 userdata1.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
        //             }
        //             // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
        //         });
        //     });

        // console.log(userdata1);
        dispatch({ type: ActionType.OTP_VERIFY, payload: userData.user });
        // nav.navigate('City');
    } catch (error) {
        // console.log('Invalid code.');
        const msg = 'Invalid code..'
        dispatch({ type: ActionType.INVALID_OTP, payload: msg });
        console.log("eeeeeeeeeeeeee", error);
    }
}

export const logOutUser = () => async (dispatch) => {
    try {
        await auth().signOut()
        dispatch({ type: ActionType.LOG_OUT })
        console.log('sucessFull logout');
    } catch (error) {
        console.log('Log Out Failed');
    }
}