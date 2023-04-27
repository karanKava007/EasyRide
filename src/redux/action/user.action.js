// import * as ActionType from '../ActionType'
// import firestore from '@react-native-firebase/firestore';
// import storage from '@react-native-firebase/storage';

// // export const getUserInfo = (id) => async (dispatch) => {
// //     // console.log('ggggggggggggggggggggg',id);
// //     try {
// //         let userdata = []
// //         console.log('$$$$$$$$$$$$$', userdata);
// //         await firestore()
// //             .collection('User')
// //             .get()
// //             .then(querySnapshot => {
// //                 querySnapshot.forEach(documentSnapshot => {
// //                     if (id === documentSnapshot.data().uid) {
// //                         userdata.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
// //                     }
// //                 });
// //             });

// //         console.log('rrrrrrrrrrrrr', userdata);
// //         dispatch({ type: ActionType.GET_USER, payload: userdata });
// //     } catch (error) {
// //         console.log(error);
// //     }
// // }

// export const getUserLive = () => async (dispatch) => {
//     // console.log('ggggggggggggggggggggg',id);
//     try {
//         let userdata1 = []
//         console.log('$$$$$$$$$$$$$', userdata1);
//         await firestore()
//             .collection('User')
//             .get()
//             .then(querySnapshot => {
//                 console.log('Total Driver: ', querySnapshot.size);
//                 querySnapshot.forEach(documentSnapshot => {
//                     userdata1.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
//                     // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
//                 });
//             });
//             console.log('vkvkvkvkvkvkkvkkvvkvkvkvkvkvkv',userdata1);
//         dispatch({ type: ActionType.LIVE_USER, payload: userdata1 });
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const postUserInfo = (data) => (dispatch) => {
//     console.log('post dattttta userrrrrr action', data);
//     try {

//         const imageArr = data.image.split("/");
//         const fileName = imageArr[imageArr.length - 1]

//         const reference = storage().ref('userImages/' + fileName);
//         const task = reference.putFile(data.image);

//         task.on('state_changed', taskSnapshot => {
//             console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
//         });

//         task.then(async () => {
//             const url = await reference.getDownloadURL();
//             console.log(url + "Image Uploded to Bucket")

//             firestore()
//                 .collection('User')
//                 .add({ ...data, image: url })
//                 .then((doc) => {
//                     // console.log("added", doc);
//                     dispatch({ type: ActionType.ADD_USER, payload: { id: doc.id, ...data, image: url } })
//                 })
//                 .catch((e) => console.log(e));

//         })
//         // +++++++++++++++++++++++++++


//     } catch (error) {
//         console.log(error);
//     }
// }

// export const putUserInfo = (upUser) => (dispatch) => {
//     console.log("act", upUser);
//     const aa = upUser.image.split("/")
//     // console.log(aa[0]);
//     if (aa[0] == 'https:') {
//         // console.log('ggggggggggggggggg');
//         try {
//             firestore()
//                 .collection('User')
//                 .doc(upUser.id)
//                 .update(upUser)
//                 .then(() => {
//                     dispatch({ type: ActionType.UPDATE_USER, payload: [{ ...upUser }] })
//                 })
//                 .catch((error) => console.log(error));
//         } catch (error) {
//             console.log(error);
//         }
//     } else {
//         try {
//             const imageArr = upUser.image.split("/");
//             const fileName = imageArr[imageArr.length - 1]

//             const reference = storage().ref('userImages/' + fileName);
//             const task = reference.putFile(upUser.image);

//             task.on('state_changed', taskSnapshot => {
//                 console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
//             });

//             task.then(async () => {
//                 const url = await reference.getDownloadURL();
//                 console.log(url + "Image Uploded to Bucket")

//                 firestore()
//                     .collection('User')
//                     .doc(upUser.id)
//                     .update({ ...upUser, image: url })
//                     .then(() => {
//                         dispatch({ type: ActionType.UPDATE_USER, payload: [{ ...upUser, image: url }] })
//                     })
//                     .catch((error) => console.log(error));
//             })
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }
// // try {

// //     const imageArr = upUser.image.split("/");
// //     const fileName = imageArr[imageArr.length - 1]

// //     const reference = storage().ref('userImages/' + fileName);
// //     const task = reference.putFile(upUser.image);

// //     task.on('state_changed', taskSnapshot => {
// //         console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
// //     });

// //     task.then(async () => {
// //         const url = await reference.getDownloadURL();
// //         console.log(url + "Image Uploded to Bucket")

// //         firestore()
// //             .collection('User')
// //             .doc(upUser.id)
// //             .update({ ...upUser, image: url })
// //             .then(() => {
// //                 dispatch({ type: ActionType.UPDATE_USER, payload: { ...upUser, image: url } })
// //             })
// //             .catch((error) => console.log(error));
// //     })
// // } catch (error) {
// //     console.log(error);
// // }
// // }


import * as ActionType from '../ActionType'
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export const getUserInfo = () => async (dispatch) => {
    try {
        let userdata = []
        await firestore()
            .collection('User')
            .get()
            .then(querySnapshot => {
                // console.log('Total Driver: ', querySnapshot.size);
                querySnapshot.forEach(documentSnapshot => {
                    if (id === documentSnapshot.data().uid) {
                    userdata.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                    }
                    // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                });
            });
            console.log('rrrrrrrrrrrrrrrruserreg',userdata);
        dispatch({ type: ActionType.GET_USER, payload: userdata });
    } catch (error) {
        console.log(error);
    }
}

export const getUserLive = () => async (dispatch) => {
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
        dispatch({ type: ActionType.LIVE_USER, payload: userdata });
    } catch (error) {
        console.log(error);
    }
}


export const postUserInfo = (data) => (dispatch) => {

    // console.log(data);
    try {

        const imageArr = data.image.split("/");
        const fileName = imageArr[imageArr.length - 1]

        const reference = storage().ref('userImages/' + fileName);
        const task = reference.putFile(data.image);

        task.on('state_changed', taskSnapshot => {
            console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
        });

        task.then(async () => {
            const url = await reference.getDownloadURL();
            console.log(url + "Image Uploded to Bucket")

            firestore()
                .collection('User')
                .add({ ...data, image: url })
                .then((doc) => {
                    // console.log("added", doc);
                    dispatch({ type: ActionType.ADD_USER, payload: { id: doc.id, ...data, image: url } })
                })
                .catch((e) => console.log(e));

        })
        // +++++++++++++++++++++++++++


    } catch (error) {
        console.log(error);
    }
}

export const putUserInfo = (upUser) => (dispatch) => {
    // console.log("act", upUser.image);
    const aa = upUser.image.split("/")
    // console.log(aa[0]);
    if (aa[0] == 'https:') {
        // console.log('ggggggggggggggggg');
        try {
            firestore()
                .collection('User')
                .doc(upUser.id)
                .update(upUser)
                .then(() => {
                    dispatch({ type: ActionType.UPDATE_USER, payload: upUser })
                })
                .catch((error) => console.log(error));
        } catch (error) {
            console.log(error);
        }
    } else {
        try {
            const imageArr = upUser.image.split("/");
            const fileName = imageArr[imageArr.length - 1]

            const reference = storage().ref('userImages/' + fileName);
            const task = reference.putFile(upUser.image);

            task.on('state_changed', taskSnapshot => {
                console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
            });

            task.then(async () => {
                const url = await reference.getDownloadURL();
                console.log(url + "Image Uploded to Bucket")

                firestore()
                    .collection('User')
                    .doc(upUser.id)
                    .update({ ...upUser, image: url })
                    .then(() => {
                        dispatch({ type: ActionType.UPDATE_USER, payload: { ...upUser, image: url } })
                    })
                    .catch((error) => console.log(error));
            })
        } catch (error) {
            console.log(error);
        }
    }
}
// try {

//     const imageArr = upUser.image.split("/");
//     const fileName = imageArr[imageArr.length - 1]

//     const reference = storage().ref('userImages/' + fileName);
//     const task = reference.putFile(upUser.image);

//     task.on('state_changed', taskSnapshot => {
//         console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
//     });

//     task.then(async () => {
//         const url = await reference.getDownloadURL();
//         console.log(url + "Image Uploded to Bucket")

//         firestore()
//             .collection('User')
//             .doc(upUser.id)
//             .update({ ...upUser, image: url })
//             .then(() => {
//                 dispatch({ type: ActionType.UPDATE_USER, payload: { ...upUser, image: url } })
//             })
//             .catch((error) => console.log(error));
//     })
// } catch (error) {
//     console.log(error);
// }
// }

