import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ToastAndroid, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { horizontalScale, verticalScale } from '../helper/ Metrics'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import {   getUserInfo, getUserLive, putUserInfo } from '../redux/action/user.action'
import { getRequestInfo, RequestDelete } from '../redux/action/request.action'
import { getDriverInfo, getDriverLive } from '../redux/action/driver.action'
import { verifyOTP } from '../redux/action/auth.action'
import { INCREMENT_REDUCER } from '../redux/ActionType'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export default function DriverDashboard() {
  const { height } = Dimensions.get('window')
  const userReq = useSelector(state => state.requestsAc)
  const userInfo = useSelector(state => state.userReducer)
  const userUid = useSelector(state => state.auth)
  const DriverInfoDataa = useSelector(state => state.DivReducer)
  const [press, setPress] = useState([])
  const [a, setA] = useState([])
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [sPin, setSPin] = useState('')
  const [dPin, setDPin] = useState('')
  const [rideTime, setRideTime] = useState('')
  const dispatch = useDispatch()
  const CurrDriverId = userUid.user.uid;
  const blank = []
  useEffect(() => {
    dispatch(getUserLive(),verifyOTP(),getDriverLive())
    dispatch(getRequestInfo())
    handleLoadRequest()
  }, [userReq.requests])
const handleLoadRequest = () => {
  let fData = userReq.requests.filter((u, i) => u.driverid === CurrDriverId)
  console.log('--------FDATA---------',fData);
  userInfo.liveUser.map((d, i) => {
    fData.map((data, item) => {
      if (data.userid === d.uid) {
        blank.push({ ...d, price: data.ridePrice, reqId: data.id })
      }
    })
  })
  a.length > 0 ?
  DriverInfoDataa.driver.map((item, index) => {
    if (item.userid === CurrDriverId) {
      setFirstName(item.firstName)
      setLastName(item.lastName)
      setDPin(item.destinationPincode)
      setSPin(item.sourcePincode)
      setRideTime(item.rideTime)
    }
  }) : <View style={{ height: height, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', paddingBottom: 120 }}>
        <Image source={require('../assets/image/sad.gif')} style={{ height: 200, width: 200 }} />
        <Text style={[styles.txt1, { color: '#777', fontSize: 24, fontWeight: '200' }]}>No Requests Found !!</Text>
      </View>

setA(blank)
// console.log('------------------------',a);
    // setDriverData(storageOfDriverInfo)


  }
  // console.log(firstName,'sdvvggg');
  // const msg = 

  const showToast = (uid) => {
    ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
    setPress((press) => [...press, uid])
  }

  const deleteDataToast = () => {
    ToastAndroid.show('Request Deleted successfully!', ToastAndroid.SHORT);
  }
  // console.log(a, 'hhhgjkj');
  // console.log('jhadjh',driverData);
  // console.log('jhsdhvas',driverData);

  const handleDelete = (id) => {
    dispatch(RequestDelete(id))
  }


  return (

    <SafeAreaView>
      {
        a.length > 0 ?
          <ScrollView>
            {
              a.map((d, i) => {
                // console.log(d.image);
                return (
                  <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>
                      <Image style={styles.img} source={{ uri: `${d.image}` }} />
                      <View>
                        <Text style={styles.txt} >Name: <Text style={styles.txt3}>{d.firstName + ' ' + d.lastName}</Text></Text>
                        <Text style={styles.txt} > {sPin + '>' + dPin}</Text>
                        <View style={styles.container2}>
                          <Text style={styles.txt} >Age: <Text style={styles.txt3}>18</Text></Text>
                          <Text style={styles.txt} >Ride Price: <Text style={styles.txt3}>{d.price + '/-'}</Text></Text>
                        </View>
                        <Text style={styles.txt} >Ride Time: <Text style={styles.txt3}>{rideTime}</Text></Text>
                      </View>
                    </View>
                    <View style={styles.btn}>
                      {press.includes(d.uid) ? <React.Fragment>
                        <View style={styles.btn2}>
                          <TouchableOpacity onPress={() => { { handleDelete(d.reqId); deleteDataToast() } }} style={styles.button}>
                            <MaterialCommunityIcons style={styles.icon} color="black" name="delete" size={25} />
                          </TouchableOpacity>
                        </View>
                        <View style={styles.btn1}>
                          <TouchableOpacity onPress={() => { Linking.openURL('tel:' + d.phoneNumber); }} style={styles.button}>
                            <Text style={styles.txt1}>Call</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.btn2}>
                          <TouchableOpacity onPress={() => {
                            Linking.openURL('whatsapp://send?text=' + `Name : ${'*' + firstName + '*'} \nSource Pincode : *${sPin}* \nDestination Pincode : *${dPin}* \nRide Price :  *${d.price}* \nPlate Number: *${DriverInfoDataa.driverLive[0].PlateNo}*` + '&phone=' + d.phoneNumber);
                          }} style={styles.button}>
                            <Text style={styles.txt2}>Chat</Text>
                          </TouchableOpacity>
                        </View>
                      </React.Fragment> : <React.Fragment>
                        <View style={styles.btn1}>
                          <TouchableOpacity onPress={() => { { showToast(d.uid) } }} style={styles.button}>
                            <Text style={styles.txt1}>Allow</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.btn2}>
                          <TouchableOpacity onPress={() => { { handleDelete(d.reqId) } }} style={styles.button}>
                            <Text style={styles.txt2}>Deny</Text>
                          </TouchableOpacity>
                        </View>
                      </React.Fragment>
                      }
                    </View>
                  </View>

                )

              })
            }
          </ScrollView>
          : <View style={{ height: height, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', paddingBottom: 120 }}>
            <Image source={require('../assets/image/sad.gif')} style={{ height: 200, width: 200 }} />
            <Text style={[styles.txt1, { color: '#777', fontSize: 24, fontWeight: '200' }]}>No Requests Found !!</Text>
          </View>
      }
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingBottom: 28,
  },
  card: {
    backgroundColor: 'white',
    height: verticalScale(190),
    width: horizontalScale(330),
    marginTop: '5%',
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: verticalScale(-55)
  },
  shadowProp: {
    elevation: 10,
  },
  img: {
    width: horizontalScale(65),
    height: verticalScale(70),
    borderRadius: 50,
    marginTop: verticalScale(6),
    marginLeft: horizontalScale(7),
  },
  txt: {
    color: '#898989',
    marginTop: verticalScale(5),
    marginLeft: horizontalScale(14),
    fontFamily: 'Poppins-Light',
    marginTop: verticalScale(7)
  },
  txt3: {
    color: 'black',
  },
  container2: {
    flexDirection: 'row',
  },
  txt1: {
    color: '#0E9D00',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  txt2: {
    color: 'blue',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  btn: {
    // flex:1,
    // backgroundColor:'black',
    flexDirection: 'row',
    // justifyContent: 'center',
    marginTop: verticalScale(25),
    borderTopWidth: 1,
    backgroundColor: 'white',
    height: verticalScale(30),
    width: horizontalScale(330),
    // marginTop: '5%',
    borderRadius: 10,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderColor: '#898989',
    marginTop: verticalScale(15),
    paddingTop: verticalScale(5),
  },
  btn1: {
    flex: 1,
    alignItems: 'center',
  },
  btn2: {
    flex: 1,
    alignItems: 'center',
  },
});  
