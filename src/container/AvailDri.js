import { View, Text, StyleSheet, Image, TouchableOpacity, ToastAndroid, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { horizontalScale, verticalScale } from '../helper/ Metrics'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { postRequestData } from '../redux/action/request.action'
import { object, string, number, date, InferType } from 'yup';
import { Form, Formik, useFormik } from 'formik';

export default function AvailDri() {
  const { height } = Dimensions.get('window')
  const [disable, setDisable] = useState([])
  const [driverId, setDriverId] = useState()
  const dispatch = useDispatch()
  const userUid = useSelector(state => state.auth)
  const AvailabledriverData = useSelector(state => state.availDri)
  let userSchema = object({
    ridePrice: number().required('Please Enter Ride-Price!!'),
  });
  const showToast = () => {
    ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
  }


  return (
    <Formik
      validationSchema={userSchema}
      initialValues={{ ridePrice: '' }}
      onSubmit={(values) => {
        dispatch(postRequestData(
          {
            userid: userUid.user.uid,
            driverid: driverId,
            ridePrice: values.ridePrice,
          }
        ))
        setDisable((disable) => [...disable, driverId])
        showToast()
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
        touched,
        setFieldValue
      }) => (
        <>
          <SafeAreaView>
            <ScrollView>
              {AvailabledriverData.availableDriver.map((d, i) => {
                return (
                  < View style={styles.container} >
                    <View style={[styles.card, styles.shadowProp]}>
                      <Image style={styles.img} source={{ uri: `${d.image}` }} />
                      <View>
                        <Text style={styles.txt} >Name: <Text style={styles.txt3}>{d.firstName + ' ' + d.lastName}</Text></Text>
                        <Text style={styles.txt} >{d.sourcePincode + ' > ' + d.destinationPincode}</Text>
                        <Text style={styles.txt} >Age: <Text style={styles.txt3}>{d.age}</Text></Text>
                        <Text style={styles.txt} >Ride Time: <Text style={styles.txt3}>{d.rideTime}</Text></Text>
                        <View style={styles.container2}>
                          <TextInput keyboardType='numeric' placeholder='Offer Your Price.' name='ridePrice' onChangeText={handleChange('ridePrice')} placeholderTextColor={'#898989'} style={[styles.inputCompo, { color: 'black' }]} />
                          <Text style={styles.validation}>{errors.ridePrice != '' && touched.ridePrice ? errors.ridePrice : ''}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.btn}>
                      <TouchableOpacity style={styles.btn1} disabled={disable.includes(d.userid) ? true : false} onPress={() => { setDriverId(d.userid); handleSubmit() }}>
                        <Text style={styles.txt2} >{disable.includes(d.userid) ? <Text style={{ color: '#ccc' }}>Request Sended</Text> : <Text>Send Request</Text>}</Text>
                      </TouchableOpacity>
                    </View>
                  </View >
                )
              })}
            </ScrollView>
          </SafeAreaView>
        </>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingBottom: verticalScale(30),
  },
  card: {
    backgroundColor: 'white',
    height: verticalScale(235),
    width: horizontalScale(330),
    marginTop: '5%',
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: verticalScale(-55)
    // borderWidth: 1,
    // borderRadius: 10,
    // paddingVertical: 45,  
    // paddingHorizontal: 25,  
    // width: '90%',
    // marginVertical: 10,
  },
  inputCompo: {
    color: 'black',
    width: '100%',
    marginTop: 7,
    fontSize: 15,
    fontFamily: 'Poppins-Light',
    borderWidth: 1,
    borderStyle: 'dashed',
    paddingBottom: 2,
    borderColor: '#898989',
  },
  shadowProp: {
    elevation: 10,
    //   shadowOffset: {width: -20, height: 4},  
    //   shadowColor: 'black',  
    //   shadowOpacity: 0.9,  
    //   shadowRadius: 3,  
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
    marginLeft: horizontalScale(11),
  },
  txt1: {
    color: 'red',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  txt2: {
    color: '#194AF9',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '900'
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
    borderColor: '#ccc',
    marginTop: verticalScale(15),
    paddingTop: verticalScale(5),
  },
  btn1: {
    flex: 1,
    alignItems: 'center',
    // margin:verticalScale(20)
    // backgroundColor:'black',
    // paddingRight: horizontalScale(85),
  },
  btn2: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor:'black',

    // borderLeftWidth:1,
    // flex:1,
    // paddingRight:90,
    // borderTopWidth:1,
  },
  validation: {
    color: 'red',
    fontSize: 10,
    fontFamily: 'Poppins-SemiBold',
  },
});

