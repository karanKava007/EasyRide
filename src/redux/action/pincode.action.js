import * as ActionType from '../ActionType'
import firestore from '@react-native-firebase/firestore';

export const getPincode = () => async (dispatch) => {
    try {
        let pincodedata = []
        await firestore()
            .collection('PinCode')
            .get()
            .then(querySnapshot => {
                // console.log('Total Pincode: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    pincodedata.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                    // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                });
            });
        dispatch({ type: ActionType.GET_PIN, payload: pincodedata });
    } catch (error) {
        console.log(error);
    }
}