import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { horizontalScale, verticalScale } from '../helper/ Metrics'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { postUserInfo, putUserInfo } from '../redux/action/user.action'
import DatePicker from 'react-native-date-picker'
import { object, string, number, date, InferType } from 'yup';
import { Form, Formik } from 'formik';
import { useFormik } from 'formik';
import * as Yup from "yup";
import ImagePicker from 'react-native-image-crop-picker';

export default function Profile({ navigation }) {
  const [date, setDate] = useState(new Date())
  const [tDate, setTDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(true)
  const [dob, setDob] = useState()
  const [age, setAge] = useState()
  const [imagePath, setImagePath] = useState('')

  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.userReducer)
  console.log('Vinitdddddddddddddddddddd ',userInfo.user[0]);
  //fomik = useFomik(setvalues{})
  const addData = () => {
    let data = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      dob: date,
      email: email,
      age: age,
    }
    dispatch(postUserInfo(data))
  }
  let userSchema = object({
    fname: string().trim().matches(/[abcdefghijklmnopqrstuvwxyz]+/, 'Is not in correct format').required('Please Enter First Name'),
    lname: string().trim().matches(/[abcdefghijklmnopqrstuvwxyz]+/, 'Is not in correct format').required('Please Enter Last Name'),
    dob: Yup.date().required('Required'),
    email: string().required('Please Enter Email').email('Please Enter Email'),
    image: Yup.mixed().required('Please Upload Your Image')
  });
  return (
    <Formik
      validationSchema={userSchema}
      enableReinitialize={true}
      initialValues={{
        id: userInfo.user[0].id ? userInfo.user[0].id : '',
        fname: userInfo.user[0].firstName ? userInfo.user[0].firstName : '',
        lname: userInfo.user[0].lastName ? userInfo.user[0].lastName : '',
        // dob: userInfo.user[0].dob ? userInfo.user[0].dob.toDate().toDateString() : '',
        age: userInfo.user[0].age ? userInfo.user[0].age : '',
        image: userInfo.user[0].image ? userInfo.user[0].image : '',
      }}
      onSubmit={(values) => {
        const birthDate = new Date(values.dob);
        const ageDifMs = Date.now() - birthDate.getTime();
        const ageDate = new Date(ageDifMs);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);
        setAge(age);
        dispatch(putUserInfo(
          {
            id: values.id,
            firstName: values.fname,
            lastName: values.lname,
            email: values.email,
            dob: new Date(values.dob),
            age: age,
            phoneNumber: userInfo.user[0].phoneNumber,
            image: values.image,
          }
        ));
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
          <View style={styles.container}>
            <View style={styles.container1}>
            </View>
            <View style={styles.container2}>
              <View style={styles.box}>
                <View style={styles.ProfileContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      ImagePicker.openPicker({
                        width: 300,
                        height: 400,
                        cropping: true
                      })
                        .then((image) => { setImagePath(image.path); setFieldValue("image", image.path) });
                    }}
                    name='image'>
                    <View style={styles.subProfileContainer}>
                      <Image source={imagePath == '' ? { uri: userInfo.user[0].image } : { uri: imagePath }} style={{ height: '100%', width: '100%' }} />
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.validation}>{errors.image != '' && touched.image ? errors.image : ''}</Text>
                </View>
                {/* <Image style={styles.img} source={{ uri: userInfo.user.image }} /> */}
                {/* <Text style={styles.text2}>John Doe</Text> */}


                <View style={styles.textinput}>
                  <Text style={styles.text2}>First Name:</Text>
                  <TextInput placeholder="John" style={styles.h1} value={values.fname} name='fname' onChangeText={handleChange('fname')} placeholderTextColor="black" />
                  <Text style={styles.validation}>{errors.fname != '' && touched.fname ? errors.fname : ''}</Text>
                </View>


                <View style={styles.textinput}>
                  <Text style={styles.text2}>Last Name:</Text>
                  <TextInput placeholder="John" style={styles.h1} value={values.lname} name='lname' onChangeText={handleChange('lname')} placeholderTextColor="black" />
                  <Text style={styles.validation}>{errors.lname != '' && touched.lname ? errors.lname : ''}</Text>
                </View>


                <View style={styles.textinput}>
                  <Text style={styles.text2}>E-Mail:</Text>
                  <TextInput placeholder="John004@gmail.com" style={styles.h1} value={values.email} name='email' onChangeText={handleChange('email')} placeholderTextColor="black" />
                  <Text style={styles.validation}>{errors.email != '' && touched.email ? errors.email : ''}</Text>
                </View>


                <View style={styles.textinput}>
                  <Text style={styles.text2}>Date Of Birth:</Text>
                  <TouchableOpacity onPress={() => setOpen(true)}>
                    {/* <Text style={[styles.box]}>{show ? <Text style={styles.text}> DOB </Text> : <Text style={styles.boxtext1}>{date.toDateString()}</Text>}</Text> */}
                    <Text style={styles.h2}>{values.dob}</Text>
                  </TouchableOpacity>

                  <DatePicker
                    mode="date"
                    modal
                    name='dob'
                    open={open}
                    date={date}
                    maximumDate={tDate}
                    onConfirm={(date) => {
                      setOpen(false)
                      setDate(date)
                      setShow(false)
                      setDob(date.toDateString())
                      // console.log("jjjjjjjjj", date, dob);
                      setFieldValue("dob", date.toISOString())
                    }}
                    onCancel={() => {
                      setOpen(false)
                    }} />
                  {console.log('uuuuuuuuu', errors)}
                  <Text style={styles.validation}>{errors.dob != '' && touched.dob ? errors.dob : ''}</Text>

                </View>

                <View style={styles.textinput}>
                  <Text style={styles.text2}>Age:</Text>
                  <Text style={styles.h2}>{values.age}</Text>
                </View>

                <View style={styles.textinput}>
                  <Text style={styles.text2}>Mobile Number:</Text>
                  <Text placeholder="+91 99734-89210" style={styles.h2}>{userInfo.user[0].phoneNumber}</Text>
                </View>
                <View style={styles.btn}>
                  <TouchableOpacity style={styles.button} onPress={() => { {handleSubmit(); navigation.navigate('Dashbord')}}}>
                    {/* <Text>onPress={() => navigation.navigate('Otp1')}</Text> */}
                    <Text style={styles.btntxt}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </>
      )}
    </Formik>
  )
}

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container1: {
    flex: 0.5,
    backgroundColor: '#194af9',
    // justifyContent: 'center',
    // alignItems:'center',
  },
  // text: {
  //   color: 'white',
  //   fontSize: 35,
  //   fontFamily: 'Poppins-Medium',
  //   // alignContent:'center',
  // },
  container2: {
    flex: 6,
    // flexDirection:'row',
    // backgroundColor:'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: '96%',
    width: '94%',
    elevation: 5,
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    padding: horizontalScale(15) && verticalScale(20),
    // borderWidth:1,
    // borderColor:'#ccc',
  },
  img: {
    marginTop: verticalScale(20),
    width: '30%',
    height: '15%',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#777',
  },
  // text2:{
  //   color:'black',
  //   fontSize:20,
  //   fontFamily: 'Poppins-Regular',
  // },
  textinput: {
    // flex:5,
    height: '10%',
    width: '90%',
    // marginTop: '3%',
    marginTop: verticalScale(9),
    // flexDirection:'row',
    // backgroundColor:'green',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text2: {
    color: '#898989',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    // marginBottom: '-1%',
    marginBottom:  verticalScale(0.001),
  },
  h1: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  h2: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    marginTop: verticalScale(15),
    marginHorizontal: horizontalScale(5),
  },
  btn: {
    marginTop: '5%',
  },
  button: {
    backgroundColor: '#194AF9',
    // width: '80%',
    // height: '14%',
    width: horizontalScale(290),
    height: verticalScale(60),
    // paddingTop: '2.8%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntxt: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 19
  },
  validation: {
    color: 'red',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
  },
  ProfileContainer: {
    backgroundColor: '#fff',
    // width: width,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subProfileContainer: {
    width: 110,
    height: 110,
    borderRadius: 300,
    backgroundColor: '#ccc',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ccc', 
  },
})