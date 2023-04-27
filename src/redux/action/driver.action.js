import * as ActionType from '../ActionType'
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';


export const getDriverInfo = (x) => async (dispatch) => {
    console.log('ggggggggggggggggggggg',x);

    try {
        let driverdata = []
        await firestore()
            .collection('Driver')
            .get()
            .then(querySnapshot => {
                // console.log('Total Driver: ', querySnapshot.size);
                querySnapshot.forEach(documentSnapshot => {
                    if (x === documentSnapshot.data().userid) {
                        console.log('I am entered');
                        driverdata.push({id:documentSnapshot.id,...documentSnapshot.data()})
                    }
                    // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                });
            });
            console.log('((((((((((((((((((((',driverdata);
        dispatch({ type: ActionType.GET_DRIVER, payload: driverdata });
    } catch (error) {
        console.log(error);
    }
}

export const getDriverLive = () => async (dispatch) => {
    try {
        let driverdata = []
        await firestore()
            .collection('Driver')
            .get()
            .then(querySnapshot => {
                // console.log('Total Driver: ', querySnapshot.size);
                querySnapshot.forEach(documentSnapshot => {
                        console.log('I am entered');
                        driverdata.push({id:documentSnapshot.id,...documentSnapshot.data()})
                    // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                });
            });
            console.log('((((((((((((((((((((',driverdata);
        dispatch({ type: ActionType.LIVE_DRIVER, payload: driverdata });
    } catch (error) {
        console.log(error);
    }
}

export const postDriverInfo = (data) => (dispatch) => {

    console.log('posttttttttttdriverrrrrr', data);
    try {
        const imageArr = data.image.split("/");
        const fileName = imageArr[imageArr.length - 1]

        const reference = storage().ref('driverImages/' + fileName);
        const task = reference.putFile(data.image);

        task.on('state_changed', taskSnapshot => {
            console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
        });

        task.then(async () => {
            const url = await reference.getDownloadURL();
            console.log(url + "Image Uploded to Bucket");

            await firestore()
                .collection('Driver')
                .add({ ...data, image: url })
                .then((doc) => {
                    console.log("addeduuuuuuuuuuuuuuuuuuu", doc);
                    dispatch({ type: ActionType.ADD_DRIVER, payload: { id: doc.id, ...data, image: url } })
                })
                .catch((e) => console.log(e));
        });

    } catch (error) {
        console.log(error);
    }
}
export const putDriverInfo = (upDriver) => (dispatch) => {
    console.log('vvvvvvvvvvvvvvvv',upDriver);
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


