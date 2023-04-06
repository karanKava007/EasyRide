import * as ActionType from '../ActionType';
import firestore from '@react-native-firebase/firestore';


export const getDriverInfoReq = (data) => async (dispatch) => {
    try {
        let driverdata = []
        let availableDriverData = []
        await firestore()
            .collection('Driver')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    driverdata.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                });
                console.log('DriverData', driverdata);
                driverdata.map((dd, index) => {
                    if (dd.vehicalType === data.vehicalType && dd.sourcePincode === data.sourcePincode && dd.destinationPincode === data.destinationPincode && dd.rideTime === data.time) {
                        availableDriverData.push(dd)
                    }
                })
                console.log('available driver', availableDriverData);
                dispatch({ type: ActionType.AVAILABLE_DRIVER, payload: availableDriverData });

            });

    } catch (error) {
        console.log(error);
    }
}