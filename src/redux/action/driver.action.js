import * as ActionType from '../ActionType'
import firestore from '@react-native-firebase/firestore';

export const getDriverInfo = () => async (dispatch) => {
    try {
        let driverdata = []
        await firestore()
            .collection('Driver')
            .get()
            .then(querySnapshot => {
                // console.log('Total Driver: ', querySnapshot.size);
                querySnapshot.forEach(documentSnapshot => {
                    driverdata.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                    // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                });
            });
        dispatch({ type: ActionType.GET_DRIVER, payload: driverdata });
    } catch (error) {
        console.log(error);
    }
}

export const postDriverInfo = (data) => (dispatch) => {

    // console.log(data);
    try {
        firestore()
            .collection('Driver')
            .add(data)
            .then((doc) => {
                // console.log("added", doc);
                dispatch({ type: ActionType.ADD_DRIVER, payload: { id: doc.id, ...data } })
            })
            .catch((e) => console.log(e));
    } catch (error) {
        console.log(error);
    }
}

export const putDriverInfo = (upDriver) => (dispatch) => {
    try {
        firestore()
        .collection('Driver')
        .doc(upDriver.id)
        .update(upDriver)
        .then(() => {
            dispatch({ type: ActionType.UPDATE_DRIVER, payload: upDriver })
        });
    } catch (error) {
        
    }  
}


