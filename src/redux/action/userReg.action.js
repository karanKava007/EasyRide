import * as ActionType from '../ActionType'
import firestore from '@react-native-firebase/firestore';

export const getUserInfo = () => async (dispatch) => {
    try {
        let userdata = []
        await firestore()
            .collection('User')
            .get()
            .then(querySnapshot => {
                // console.log('Total Driver: ', querySnapshot.size);
                querySnapshot.forEach(documentSnapshot => {
                    userdata.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                    // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                });
            });
        dispatch({ type: ActionType.GET_USER, payload: userdata });
    } catch (error) {
        console.log(error);
    }
}

export const postUserInfo = (data) => (dispatch) => {

    // console.log(data);
    try {
        firestore()
            .collection('User')
            .add(data)
            .then((doc) => {
                // console.log("added", doc);
                dispatch({ type: ActionType.ADD_USER, payload: { id: doc.id, ...data } })
            })
            .catch((e) => console.log(e));
    } catch (error) {
        console.log(error);
    }
}

export const putUserInfo = (upUser) => (dispatch) => {
    // console.log("act", upUser);
    try {
        firestore()
        .collection('User')
        .doc(upUser.id)
        .update(upUser)
        .then(() => {
            dispatch({ type: ActionType.UPDATE_USER, payload: upUser })
        });
    } catch (error) {
        
    }
}


