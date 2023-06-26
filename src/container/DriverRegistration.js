import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput, ScrollView, Dimensions, Image, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-native-date-picker'
import { Dropdown } from 'react-native-element-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { horizontalScale, verticalScale } from '../helper/ Metrics';
import { useDispatch, useSelector } from 'react-redux';
import { getDriverInfo, getDriverLive, postDriverInfo } from '../redux/action/driver.action';
import { getPincode } from '../redux/action/pincode.action';
import { object, string, number, date, InferType } from 'yup';
import { Form, Formik, useFormik } from 'formik';
import * as Yup from "yup";
import { verifyOTP } from '../redux/action/auth.action';
import ImagePicker from 'react-native-image-crop-picker';

export default function DriverRegistration({ navigation }) {
    const [date, setDate] = useState(new Date())
    const [tdate, setTdate] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [openTime, setOpenTime] = useState(false)
    const [show, setShow] = useState(true)
    const [showTime, setShowTime] = useState(true)
    const [dob, setDob] = useState()
    const [agee, setAgee] = useState()
    const dispatch = useDispatch()
    const pincodeData = useSelector(state => state.pincode);
    const userUid = useSelector(state => state.auth)
    const [imagePath, setImagePath] = useState('')
    // console.log(imagePath);
    useEffect(() => {
        dispatch(getPincode(), verifyOTP())
    }, []);

    const genderData = [
        { label1: 'Male', value: 'male' },
        { label1: 'Female', value: 'female' },
    ];

    const pinData = [];
    pincodeData.PinCodes.map((p) => {
        pinData.push({ label1: p.pincode, value: p.pincode })
    });

    const vehicleData = [
        { label1: 'Car', value: 'car' },
        { label1: 'Bike', value: 'bike' },
        { label1: 'Scooter', value: 'scooter' },
    ];

    const countAge = () => {
        const birthDate = new Date(date);
        const ageDifMs = Date.now() - birthDate.getTime();
        const ageDate = new Date(ageDifMs);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);
        setAgee(age);
    }


    ///////////////////////////////////////////////////////////

    const driverInfo = useSelector(state => state.DivReducer)

    useEffect(() => {
        countAge()
        dispatch(getDriverLive())
    }, [])

    // const formikO = useFormik({
    //     initialValues: { fname: '', lname: '', dob: '', gender: '', spin: '', dpin: '', vehicle: '', rideTime: '', image: '' }
    // });

    let driverSchema = object().shape({
        fname: string().trim().matches(/[abcdefghijklmnopqrstuvwxyz]+/, 'Is not in correct format').required('Please Enter First Name'),
        lname: string().trim().matches(/[abcdefghijklmnopqrstuvwxyz]+/, 'Is not in correct format').required('Please Enter Last Name'),
        gender: string().required('Please Enter Gender'),
        spin: string().required('Please Enter Source Pincode'),
        dpin: string().required('Please Enter destination Pincode'),
        vehicle: string().required('Please Enter Vehicle Type'),
        dob: Yup.date().nullable()
            .test('dob', 'Should be greater than 18', function (value, ctx) {
                const dob = new Date(value);
                const validDate = new Date();
                const valid = validDate.getFullYear() - dob.getFullYear() >= 18;
                return !valid ? ctx.createError() : valid;
            })
            .required('Required'),
        rideTime: string().required('Please Enter Ride Time'),
        image: Yup.mixed().required('Please Upload Your Image'),
        plateno: string().trim().matches(/^[A-Z,a-z]{2}\s[0-9]{2}\s[A-Z,a-z]{2}\s[0-9]{4}$/, "Invalid Indian number plate format").required('Please Enter Plate Number'),
    });


    return (
        <KeyboardAvoidingView
            style={styles.container1}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Formik
                    validationSchema={driverSchema}
                    initialValues={{ fname: '', lname: '', dob: '', gender: '', spin: '', dpin: '', vehicle: '', rideTime: '', image: '', plateno: '' }}
                    onSubmit={(values, { resetForm }) => {

                        dispatch(postDriverInfo(
                            {
                                userid: userUid.user.uid,
                                firstName: values.fname,
                                lastName: values.lname,
                                dob: values.dob,
                                gender: values.gender,
                                sourcePincode: values.spin,
                                destinationPincode: values.dpin,
                                vehicalType: values.vehicle,
                                rideTime: values.rideTime.toLocaleTimeString().toLowerCase(),
                                age: agee,
                                image: imagePath,
                                PlateNo: values.plateno.toUpperCase(),
                                userType: 'driver',
                            }));
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
                            <ScrollView>
                                <View style={styles.container}>
                                    {/* UserProfile Image Below*/}
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
                                                <Image source={imagePath == '' ? require('../assets/image/user.png') : { uri: imagePath }} style={{ height: '100%', width: '100%' }} />

                                            </View>
                                        </TouchableOpacity>
                                        <Text style={styles.validation}>{errors.image != '' && touched.image ? errors.image : ''}</Text>
                                    </View>
                                    <View style={styles.subcontainer1}>
                                    </View>
                                    <View>
                                        <TextInput placeholder='First Name' placeholderTextColor={'#898989'} name='fname' onChangeText={handleChange('fname')} style={styles.textname} />
                                        <Text style={styles.validation}>{errors.fname != '' && touched.fname ? errors.fname : ''}</Text>

                                        <TextInput placeholder='Last Name' placeholderTextColor={'#898989'} name='lname' onChangeText={handleChange('lname')} style={styles.textname} />
                                        <Text style={styles.validation}>{errors.lname != '' && touched.lname ? errors.lname : ''}</Text>

                                        <TouchableOpacity onPress={() => setOpen(true)}>
                                            <Text style={[styles.textnamee]} >{show ? "DOB" : <Text style={styles.textname}>{date.toDateString()}</Text>}</Text>
                                        </TouchableOpacity>
                                        <DatePicker
                                            mode="date"
                                            modal
                                            name='dob'
                                            open={open}
                                            date={date}
                                            maximumDate={tdate}
                                            onConfirm={(date) => {
                                                setOpen(false)
                                                setDate(date)
                                                setShow(false)
                                                setDob(date.toDateString())
                                                setFieldValue("dob", date)
                                            }}
                                            onCancel={() => {
                                                setOpen(false)
                                            }} />
                                        <Text style={styles.validation}>{errors.dob != '' && touched.dob ? errors.dob : ''}</Text>

                                        <Dropdown
                                            style={styles.dropdown}
                                            placeholderStyle={styles.placeholderStyle}
                                            selectedTextStyle={styles.selectedTextStyle}
                                            iconStyle={styles.iconStyle}
                                            data={genderData}
                                            maxHeight={300}
                                            labelField="label1"
                                            valueField="value"
                                            placeholder="Gender"
                                            value={values.gender}
                                            itemTextStyle={{ color: 'black' }}
                                            name='gender'
                                            onChange={item => {
                                                setFieldValue("gender", item.value)
                                            }}

                                        />
                                        <Text style={styles.validation}>{errors.gender != '' && touched.gender ? errors.gender : ''}</Text>
                                        <Dropdown
                                            style={styles.dropdown}
                                            placeholderStyle={styles.placeholderStyle}
                                            selectedTextStyle={styles.selectedTextStyle}
                                            inputSearchStyle={styles.inputSearchStyle}
                                            iconStyle={styles.iconStyle}
                                            data={pinData}
                                            search
                                            maxHeight={300}
                                            labelField="label1"
                                            valueField="value"
                                            placeholder="Source Pincode"
                                            value={values.spin}
                                            itemTextStyle={{ color: 'black' }}
                                            name='spin'
                                            onChangeText={handleChange('spin')}
                                            onChange={item => {
                                                setFieldValue("spin", item.value)
                                            }}
                                        />
                                        <Text style={styles.validation}>{errors.spin != '' && touched.spin ? errors.spin : ''}</Text>
                                        <Dropdown
                                            style={styles.dropdown}
                                            placeholderStyle={styles.placeholderStyle}
                                            selectedTextStyle={styles.selectedTextStyle}
                                            inputSearchStyle={styles.inputSearchStyle}
                                            iconStyle={styles.iconStyle}
                                            data={pinData}
                                            search
                                            maxHeight={300}
                                            labelField="label1"
                                            valueField="value"
                                            placeholder="Destination Pincode"
                                            value={values.dpin}
                                            itemTextStyle={{ color: 'black' }}
                                            name='dpin'
                                            onChangeText={handleChange('dpin')}
                                            onChange={item => {
                                                setFieldValue("dpin", item.value)
                                            }}
                                        />
                                        <Text style={styles.validation}>{errors.dpin != '' && touched.dpin ? errors.dpin : ''}</Text>
                                        <Dropdown
                                            style={styles.dropdown}
                                            placeholderStyle={styles.placeholderStyle}
                                            selectedTextStyle={styles.selectedTextStyle}
                                            iconStyle={styles.iconStyle}
                                            data={vehicleData}
                                            maxHeight={300}
                                            labelField="label1"
                                            valueField="value"
                                            placeholder="Vehical Type"
                                            value={values.vehicle}
                                            itemTextStyle={{ color: 'black' }}
                                            name='vehicle'
                                            onChangeText={handleChange('vehicle')}
                                            onChange={item => {
                                                setFieldValue("vehicle", item.value)
                                            }}
                                        />
                                        <Text style={styles.validation}>{errors.vehicle != '' && touched.vehicle ? errors.vehicle : ''}</Text>
                                        <TouchableOpacity onPress={() => setOpenTime(true)} >
                                            <Text style={[styles.textnamee]}>{showTime ? "Ride Time" : <Text style={styles.textname}>{time.toLocaleTimeString()}</Text>}</Text>
                                        </TouchableOpacity>
                                        <DatePicker
                                            mode="time"
                                            modal
                                            open={openTime}
                                            date={time}
                                            minuteInterval={15}
                                            name='rideTime'
                                            onConfirm={(date) => {
                                                setOpenTime(false)
                                                setTime(date)
                                                setShowTime(false)
                                                setFieldValue('rideTime', date)
                                                handleChange('rideTime')
                                            }}
                                            onCancel={() => {
                                                setOpenTime(false)
                                            }} />
                                        <Text style={styles.validation}>{errors.rideTime != '' && touched.rideTime ? errors.rideTime : ''}</Text>
                                        <TextInput placeholder='Vehicle Plate Number' placeholderTextColor={'#898989'} name='plateno' onChangeText={handleChange('plateno')} style={styles.textname} />
                                        <Text style={styles.validation}>{errors.plateno != '' && touched.plateno ? errors.plateno : ''}</Text>
                                        <View style={styles.button1}>
                                            <TouchableOpacity style={styles.button} onPress={() => { countAge(); handleSubmit(); }}>
                                                <Text style={styles.btnText}>Next</Text>
                                            </TouchableOpacity>
                                        </View>
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


const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container1:{
        flex:1,
    },
    container: {
        flex: 5,
        backgroundColor: 'white',
    },
    ProfileContainer: {
        backgroundColor: '#fff',
        width: width,
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
    dropdown: {
        color: 'black',
        fontSize: 16,
        paddingHorizontal: horizontalScale(20),
        paddingVertical: verticalScale(5),
        borderColor: '#898989',
        borderRadius: 10,
        borderWidth: 1,
        marginHorizontal: horizontalScale(20),
        marginVertical: verticalScale(12),

    },
    icon: {
        marginRight: 5,
        color: '#898989',

    },
    placeholderStyle: {
        fontSize: 16,
        color: '#898989',

    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#0D0F17',
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        color: '#0D0F17',
    },
    subcontainer1: {
        alignItems: 'center',
        marginTop: verticalScale(1)
    },
    text: {
        color: '#0D0F17',
        fontSize: 22,
        fontFamily: 'Semibold'

    },
    btnText: {
        color: '#FFFFFF',
        fontWeight: 800,
        fontSize: 22,
        fontFamily: 'Poppins-SemiBold'
    },
    textname: {
        color: 'black',
        fontSize: 16,
        paddingHorizontal: horizontalScale(20),
        paddingVertical: verticalScale(10),
        borderColor: '#898989',
        borderRadius: 10,
        borderWidth: 1,
        marginHorizontal: horizontalScale(20),
        marginVertical: verticalScale(12),
    },
    textnamee: {
        color: '#868686',
        fontSize: 16,
        paddingHorizontal: horizontalScale(20),
        paddingVertical: verticalScale(14),
        borderColor: '#898989',
        borderRadius: 10,
        borderWidth: 1,
        marginHorizontal: horizontalScale(20),
        marginVertical: verticalScale(12),
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#194AF9',
        borderRadius: 90,
        height: verticalScale(60),
        width: horizontalScale(320),
        marginBottom: verticalScale(30),
    },
    boxtext: {
        borderWidth: 1,
        fontSize: 20,
        borderRadius: 10,
        borderColor: '#B6B6B6',
        marginTop: 20,
        color: '#898989',
    },
    bold: {
        color: '#000'
    },
    button1: {
        alignItems: 'center',
    },
    validation: {
        color: 'red',
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold',
        marginLeft: 25,
    },
})