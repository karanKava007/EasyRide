import { log } from 'react-native-reanimated';
import * as ActionType from '../ActionType';
import firestore from '@react-native-firebase/firestore';


export const getDriverInfoReq = (data) => async (dispatch) => {
    // console.log(data,'fxsaffhcxhgascxgc');
    try {
        let driverdata = []
        let availableDriverData = []
        await firestore()
            .collection('Driver')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    driverdata.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                    // console.log("----------------------------",driverdata);
                });
                console.log('DriverData',driverdata);
                // sourcePincode: values.spin,
                //         destinationPincode: values.dpin,
                //         vehicalType: values.vehicle,
                //         rideTime: values.rideTime,
                driverdata.map((dd, index) => {
                    // console.log(dd.sourcePincode === data.sourcePincod,'sssss');
                    // console.log(dd.destinationPincode === data.destinationPincode,'Pincode');
                    console.log(dd.rideTime, data.time,'Ride Timw');

                    if (dd.vehicalType === data.vehicalType && dd.sourcePincode === data.sourcePincode && dd.destinationPincode === data.destinationPincode && dd.rideTime === data.time) {
                        availableDriverData.push(dd)
                        console.log('trueeeeeeeeeeeee',availableDriverData);
                    }
                })
                console.log('available driver', availableDriverData);
                dispatch({ type: ActionType.AVAILABLE_DRIVER, payload: availableDriverData });

            });
    } catch (error) {
        console.log(error);
    }
}