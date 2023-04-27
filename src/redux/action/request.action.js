import * as ActionType from '../ActionType'
import firestore from '@react-native-firebase/firestore';

export const getRequestInfo = () => async (dispatch) => {
    try {
        let driverdata = []
        await firestore()
            .collection('Requests')
            .get()
            .then(querySnapshot => {
                // console.log('Total Driver: ', querySnapshot.size);
                querySnapshot.forEach(documentSnapshot => {
                    driverdata.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                    // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                });
            });
        dispatch({ type: ActionType.GET_USER_REQUEST, payload: driverdata });
    } catch (error) {
        console.log(error);
    }
}

export const postRequestData = (data) => (dispatch) => {

    console.log(data);
    try {
        firestore()
            .collection('Requests')
            .add(data)
            .then((doc) => {
                // console.log("added", doc);
                dispatch({ type: ActionType.SEND_REQUEST, payload: { id: doc.id, ...data } })
            })
            .catch((e) => console.log(e));
    } catch (error) {
        console.log(error);
    }
}



export const RequestDelete = (id) => (dispatch) => {
    try {

        firestore()
            .collection('Requests')
            .doc(id)
            .delete()
            .then(() => {
                dispatch({ type: ActionType.DELETE_REQUEST, payload: id });
            });

    } catch (error) {

    }
}