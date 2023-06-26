import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard } from 'react-native';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { horizontalScale, moderateScale, verticalScale } from '../helper/ Metrics';
import { getUserLive, postUserInfo } from '../redux/action/user.action';
import { useDispatch, useSelector } from 'react-redux';
import { object, string, number, date, InferType } from 'yup';
import { Form, Formik, useFormik } from 'formik';
import * as Yup from "yup";
import ImageCropPicker from 'react-native-image-crop-picker';
import { ScrollView } from 'react-native-gesture-handler';
// import DatePicker from 'react-native-datepicker'

export default function WelToEasyRide({ navigation }) {
    const [date, setDate] = useState(new Date())
    const [tDate, setTDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(true)
    const [agee, setAgee] = useState()
    const [imagePath, setImagePath] = useState('')
    const userUid = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const countAge = () => {
        const birthDate = new Date(date);
        const ageDifMs = Date.now() - birthDate.getTime();
        const ageDate = new Date(ageDifMs);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);
        setAgee(age);
    }

    // const addData = () => {
    //     let data = {
    //         firstName: firstName,
    //         lastName: lastName,
    //         email: email,
    //         dob: date,
    //     }
    //     dispatch(postUserInfo(data))
    // }
    const userrInfo = useSelector(state => state.userReducer)
    console.log(userrInfo, 'gggggggggggggg');
    useEffect(() => {
        countAge()
        dispatch(getUserLive())
    }, [])
    let userSchema = object({
        fname: string().trim().matches(/[abcdefghijklmnopqrstuvwxyz]+/, 'Is not in correct format').required('Please Enter First Name'),
        lname: string().trim().matches(/[abcdefghijklmnopqrstuvwxyz]+/, 'Is not in correct format').required('Please Enter Last Name'),
        dob: string().required('Please Enter Date Of Birth'),
        email: string().required('Please Enter Email').email('Please Enter Email'),
        image: Yup.mixed().required('Please Upload Your Image')
    });
    return (
        <KeyboardAvoidingView
            style={styles.container1}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Formik
                    validationSchema={userSchema}
                    initialValues={{ fname: '', lname: '', dob: '', email: '', image: '' }}
                    onSubmit={(values, { resetForm }) => {
                        dispatch(postUserInfo(
                            {
                                firstName: values.fname,
                                lastName: values.lname,
                                email: values.email,
                                dob: values.dob,
                                age: agee,
                                uid: userUid.user.uid,
                                phoneNumber: userUid.user.phoneNumber,
                                image: imagePath,
                                userType: 'user',
                            }));
                        // navigation.navigate('Dashbord');    
                        console.log('fffffffffffffffffffffffffffffff', values);
                        resetForm();
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
                            <ScrollView style={{ backgroundColor: 'white' }}>
                                <View style={styles.container}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={styles.h2}>Welcome To Easy Ride!</Text>
                                        <Text style={styles.h3}>Let's Get acquainted</Text>
                                    </View>
                                    <View>
                                        <View style={styles.ProfileContainer}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    ImageCropPicker.openPicker({
                                                        width: 300,
                                                        height: 400,
                                                        cropping: true
                                                    })
                                                        .then((image) => { setImagePath(image.path); setFieldValue("image", image.path) });
                                                }} name='image'>
                                                <View style={styles.subProfileContainer}>
                                                    <Image source={imagePath == '' ? require('../assets/image/user.png') : { uri: imagePath }} style={{ height: '100%', width: '100%' }} />
                                                </View>
                                            </TouchableOpacity>
                                            <Text style={styles.validation}>{errors.image != '' && touched.image ? errors.image : ''}</Text>
                                        </View>
                                        <TextInput placeholder='First Name' style={styles.box} name='fname' onChangeText={handleChange('fname')} placeholderTextColor="#898989" />
                                        <Text style={styles.validation}>{errors.fname != '' && touched.fname ? errors.fname : ''}</Text>
                                        <TextInput placeholder="Last Name" style={styles.box} name='lname' onChangeText={handleChange('lname')} placeholderTextColor="#898989" />
                                        <Text style={styles.validation}>{errors.lname != '' && touched.lname ? errors.lname : ''}</Text>
                                        <TextInput placeholder="Email" keyboardType='email-address' style={styles.box} name='email' onChangeText={handleChange('email')} placeholderTextColor="#898989" />
                                        <Text style={styles.validation}>{errors.email != '' && touched.email ? errors.email : ''}</Text>
                                        <TouchableOpacity onPress={() => setOpen(true)}>
                                            <Text style={[styles.box]}>{show ? <Text style={styles.text}> DOB </Text> : <Text style={styles.boxtext1}>{date.toDateString()}</Text>}</Text>
                                        </TouchableOpacity>

                                        <DatePicker
                                            mode="date"
                                            modal
                                            open={open}
                                            date={date}
                                            maximumDate={tDate}
                                            name='dob'
                                            onConfirm={(date) => {
                                                setOpen(false)
                                                setDate(date)
                                                setShow(false)
                                                setFieldValue("dob", date)
                                            }}
                                            onCancel={() => {
                                                setOpen(false)
                                            }} />
                                        <Text style={styles.validation}>{errors.dob != '' && touched.dob ? errors.dob : ''}</Text>
                                    </View>

                                    <View style={styles.buttonSection}>
                                        <TouchableOpacity style={styles.button} onPress={() => { countAge(); handleSubmit() }}>
                                            <Text style={styles.btnText}>Get Started</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ScrollView>
                        </>
                    )}
                </Formik>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

// const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container1:{
        flex:1,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        // padding: 20,
        padding: '5%',
    },

    h2: {
        fontSize: moderateScale(25),
        marginTop: verticalScale(40),
        fontFamily: 'Poppins-SemiBold',
        color: '#0D0F17',
    },

    h3: {
        marginTop: verticalScale(6),
        fontFamily: 'Poppins',
        fontSize: moderateScale(17),
        color: '#898989',
        marginBottom: verticalScale(20),
    },

    box: {
        borderWidth: 1,
        fontSize: moderateScale(20),
        borderRadius: 10,
        borderColor: '#898989',
        marginTop: verticalScale(20),
        // padding: 10,
        padding: '3.5%',
        color: 'black',
    },

    btnText: {
        color: '#FFFFFF',
        fontSize: moderateScale(22),
        fontFamily: 'Poppins-SemiBold'
    },

    buttonSection: {
        flex: 1,
        justifyContent: 'flex-end',
        // alignContent:'center',
        alignItems: 'center',
        // color: 'black',
        marginBottom: verticalScale(10),
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#194AF9',
        // marginHorizontal: 25,
        // marginTop:'40%',
        // paddingHorizontal: 25,
        // paddingVertical: 15,
        borderRadius: 90,
        // marginHorizontal: 15,
        height: verticalScale(60),
        width: horizontalScale(310),
        marginTop: verticalScale(-25),
    },
    boxtext: {
        borderWidth: 1,
        fontSize: moderateScale(20),
        borderRadius: 10,
        borderColor: '#B6B6B6',
        marginTop: verticalScale(20),
        // padding: 10,
        color: '#898989',
    },
    boxtext1: {
        color: 'black',
    },
    text: {
        color: '#898989'
    },
    validation: {
        color: 'red',
        // textAlign: 'center',
        fontSize: moderateScale(13),
        fontFamily: 'Poppins-SemiBold',
    },
    ProfileContainer: {
        backgroundColor: '#fff',
        // width: width,
        // height: 140,
        height: '22%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subProfileContainer: {
        width: horizontalScale(110),
        height: verticalScale(110),
        borderRadius: 300,
        backgroundColor: '#ccc',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ccc',
    },
})