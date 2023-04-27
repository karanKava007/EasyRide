import * as ActionType from '../ActionType';
import firestore from '@react-native-firebase/firestore';


export const postFeedback = (data) => (dispatch) => {
    console.log(data);
    try {
        firestore()
            .collection('UserFeedback')
            .add(data)
            .then((doc) => {

                dispatch({ type: ActionType.ADD_FEEDBACK, payload: { id: doc.id, ...data } })
            });
    } catch (error) {
        console.log(error);
    }
}



export const postDriverFeedback = (data) => (dispatch) => {
    console.log(data);
    try {
        firestore()
            .collection('DriverFeedback')
            .add(data)
            .then((doc) => {

                dispatch({ type: ActionType.USER_FEEDBACK, payload: { id: doc.id, ...data } })
            });
    } catch (error) {
        console.log(error);
    }
}