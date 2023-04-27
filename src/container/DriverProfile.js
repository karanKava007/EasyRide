import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { horizontalScale, verticalScale } from '../helper/ Metrics'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { getDriverInfo, postDriverInfo, putDriverInfo } from '../redux/action/driver.action'
import { Dropdown } from 'react-native-element-dropdown'
import DatePicker from 'react-native-date-picker'
import { object, string, number, date, InferType } from 'yup';
import { Form, Formik } from 'formik';
import { useFormik } from 'formik';
import * as Yup from "yup";
import ImagePicker from 'react-native-image-crop-picker';

export default function Profile({ navigation }) {
    const [id, setId] = useState()
    const [genderValue, setValue] = useState(null);
    const [vehicle, setVehicle] = useState(null);
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [date, setDate] = useState(new Date())
    const [dob, setDob] = useState()
    // const [vehicalType, setVehicalType] = useState()
    const [rideTime, setRideTime] = useState()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [openTime, setOpenTime] = useState(false)
    const [show, setShow] = useState(true)
    const [tdate, setTdate] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [spin, setSPin] = useState(null);
    const [dpin, setDPin] = useState(null);
    const [imagePath, setImagePath] = useState('')
    const driverInfo = useSelector(state => state.DivReducer)
    const pincodeData = useSelector(state => state.pincode);
    // console.log('hhhhhhhhhhhhhhhhhhhhh', driverInfo.driver[0]);
    // useEffect(() => {
    //     setId(driverInfo.driver.id)
    //     setFirstName(driverInfo.driver.firstName)
    //     setLastName(driverInfo.driver.lastName)
    //     setValue(driverInfo.driver.gender)
    //     // setDob(driverInfo.driver.dob.getFullYear() + "/" + (driverInfo.driver.dob.getMonth() + 1) + "/" + driverInfo.driver.dob.getDate())
    //     setVehicle(driverInfo.driver.vehicalType)
    //     setRideTime(driverInfo.driver.rideTime)
    //     setSPin(driverInfo.driver.sourcePincode)
    //     setDPin(driverInfo.driver.destinationPincode)
    // }, [])


    const pinData = [];

    pincodeData.PinCodes.map((p) => {
        pinData.push({ label1: p.pincode, value: p.pincode })
    });

    const addData = () => {
        let data = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            dob: date,
            gender: genderValue,
            vehicalType: vehicle,
            rideTime: rideTime,
            sourcePincode: spin,
            destinationPincode: dpin,
        }
        dispatch(postDriverInfo(data))
    }
    // const UpdateDriver = () => {
    //     let upDriver = {
    //         id: id,
    //         firstName: firstName,
    //         lastName: lastName,
    //         dob: date,
    //         gender: genderValue,
    //         vehicalType: vehicle,
    //         rideTime: rideTime,
    //         sourcePincode: spin,
    //         destinationPincode: dpin,
    //     }
    //     dispatch(putDriverInfo(upDriver))
    // }

    const genderData = [
        { label1: 'Male', value: 'male' },
        { label1: 'Female', value: 'female' },
    ];

    const vehicleData = [
        { label1: 'Car', value: 'car' },
        { label1: 'Bike', value: 'bike' },
        { label1: 'Scooter', value: 'scooter' },
    ];
    let DriverSchema = object({
        fname: string().trim().matches(/[abcdefghijklmnopqrstuvwxyz]+/, 'Is not in correct format').required('Please Enter First Name'),
        lname: string().trim().matches(/[abcdefghijklmnopqrstuvwxyz]+/, 'Is not in correct format').required('Please Enter Last Name'),
        dob: Yup.date().required('Required'),
        email: string().required('Please Enter Email').email('Please Enter Email'),
        image: Yup.mixed().required('Please Upload Your Image')
    });
    return (
        <Formik
            validationSchema={DriverSchema}
            enableReinitialize={true}
            initialValues={{
                id: driverInfo.driver.id ? driverInfo.driver.id : '',
                fname: driverInfo.driver[0].firstName ? driverInfo.driver[0].firstName : '',
                lname: driverInfo.driver[0].lastName ? driverInfo.driver[0].lastName : '',
                gender: driverInfo.driver[0].gender ? driverInfo.driver[0].gender : '',
                // dob: driverInfo.driver[0].dob ? driverInfo.driver[0].dob.toDateString() : '',
                vehicle: driverInfo.driver[0].vehicalType ? driverInfo.driver[0].vehicalType : '',
                rideTime: driverInfo.driver[0].rideTime ? driverInfo.driver[0].rideTime : '',
                spin: driverInfo.driver[0].sourcePincode ? driverInfo.driver[0].sourcePincode : '',
                dpin: driverInfo.driver[0].destinationPincode ? driverInfo.driver[0].destinationPincode : '',
                image: driverInfo.driver[0].image ? driverInfo.driver[0].image : '',

                // age: userInfo.user.age ? userInfo.user.age : '',
                // image: userInfo.user.image ? userInfo.user.image : '',
            }}
            onSubmit={(values) => {
                dispatch(putDriverInfo(
                    {
                        id: values.id,
                        firstName: values.fname,
                        lastName: values.lname,
                        gender: values.gender,
                        vehicalType: values.vehicle,
                        rideTime: values.rideTime,
                        sourcePincode: values.spin,
                        destinationPincode: values.dpin,
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

                <View style={styles.container}>
                    <View style={styles.container2}>
                        <View style={styles.box}>
                            {/* driverInfo.driver.image */}
                            <Image style={styles.img} source={{ uri: driverInfo.driver[0].image }} />
                            {/* {console.log(driverInfo.driver)} */}
                            {/* <Text style={styles.text2}>John Doe</Text> */}
                            <View style={styles.textinput}>
                                <Text style={styles.text2}>First Name:</Text>
                                <TextInput value={values.fname} name='fname' onChangeText={handleChange('fname')} style={styles.h1} />
                                <Text style={styles.validation}>{errors.fname != '' && touched.fname ? errors.fname : ''}</Text>

                            </View>
                            <View style={styles.textinput}>
                                <Text style={styles.text2}>Last Name:</Text>
                                <TextInput value={values.lname} name='lname' onChangeText={handleChange('lname')} style={styles.h1} placeholderTextColor="black" />
                            </View>

                            <View style={styles.textinput}>
                                <Text style={styles.text2}>Gender</Text>
                                {/* <TextInput placeholder="18" value={driverInfo.driver.gender} style={styles.h1} placeholderTextColor="black" />  */}
                                {/* <Text value={values.gender} name='gender' onChangeText={handleChange('gender')} style={styles.h1}>{values.gender}</Text> */}
                                <Dropdown
                                    style={[styles.dropdown, styles.h1]}
                                    // placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    iconStyle={styles.iconStyle}
                                    value={values.gender}
                                    name='gender'
                                    onChangeText={handleChange('gender')}
                                    data={genderData}
                                    maxHeight={300}
                                    labelField="label1"
                                    valueField="value"
                                    placeholder="Gender"
                                    // value={genderValue}
                                    // onChangeText={setValue}
                                    itemTextStyle={{ color: 'black' }}
                                    onChange={item => {
                                        setValue(item.value);
                                        setgender(item.value);
                                    }} />
                            </View>

                            {/* <View style={styles.textinput}>
                                <Text style={styles.text2}>Date Of Birth:</Text>
                                <TouchableOpacity onPress={() => setOpen(true)}>
                                </TouchableOpacity>
                                <DatePicker
                                    mode="date"
                                    modal
                                    open={open}
                                    date={date}
                                    name='dob'
                                    maximumDate={tdate}
                                    onConfirm={(date) => {
                                        setOpen(false)
                                        setDate(date)
                                        setShow(false)
                                        setDob(date.toDateString())
                                        setFieldValue("dob", date.toISOString())

                                        // console.log(date);
                                    }}
                                    onCancel={() => {
                                        setOpen(false)
                                    }} />
                            </View> */}

                            <View style={styles.textinput}>
                                <Text style={styles.text2}>Vehical Type:</Text>
                                {/* <TextInput placeholder="Car/Bike/Scooter" value={driverInfo.driver.vehicalType} style={styles.h1} placeholderTextColor="black" /> */}
                                <Dropdown
                                    style={styles.dropdown}
                                    // placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    iconStyle={styles.iconStyle}
                                    data={vehicleData}
                                    value={values.vehicle}
                                    name='vehicle'
                                    onChangeText={handleChange('vehicle')}
                                    maxHeight={300}
                                    labelField="label1"
                                    valueField="value"
                                    placeholder="Vehical Type"
                                    // value={vehicle}
                                    // onChangeText={setVehicle}
                                    itemTextStyle={{ color: 'black' }}
                                    onChange={item => {
                                        setVehicle(item.value);
                                        // setVehicalType(item.value);
                                    }} />
                            </View>
                            <View style={styles.textinput}>
                                <Text style={styles.text2}>Source Pincode:</Text>
                                {/* <TextInput placeholder="Car/Bike/Scooter" value={driverInfo.driver.vehicalType} style={styles.h1} placeholderTextColor="black" /> */}
                                <Dropdown
                                    style={[styles.dropdown, styles.h1]}
                                    // placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    iconStyle={styles.iconStyle}
                                    data={pinData}
                                    value={values.spin}
                                    name='spin'
                                    onChangeText={handleChange('spin')}
                                    maxHeight={300}
                                    labelField="label1"
                                    valueField="value"
                                    // value={spin}
                                    // onChangeText={setSPin}
                                    itemTextStyle={{ color: 'black' }}
                                    onChange={item => {
                                        setSPin(item.value);
                                        // setgender(item.value);
                                    }} />
                            </View>
                            <View style={styles.textinput}>
                                <Text style={styles.text2}>Destination Pincode:</Text>
                                {/* <TextInput placeholder="Car/Bike/Scooter" value={driverInfo.driver.vehicalType} style={styles.h1} placeholderTextColor="black" /> */}
                                <Dropdown
                                    style={[styles.dropdown, styles.h1]}
                                    // placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    iconStyle={styles.iconStyle}
                                    data={pinData}
                                    value={values.dpin}
                                    name='dpin'
                                    onChangeText={handleChange('dpin')}
                                    maxHeight={300}
                                    labelField="label1"
                                    valueField="value"
                                    // value={dpin}
                                    // onChangeText={setDPin}
                                    itemTextStyle={{ color: 'black' }}
                                    onChange={item => {
                                        setDPin(item.value);
                                        // setgender(item.value);
                                    }} />
                            </View>

                            <View style={styles.textinput}>
                                <Text style={styles.text2}>Ride Time:</Text>
                                {/* <TextInput placeholder="4:00" value={driverInfo.driver.rideTime} style={styles.h1} placeholderTextColor="black" /> */}
                                <TouchableOpacity onPress={() => setOpenTime(true)} >
                                    <Text style={styles.h2} onChangeText={setRideTime}>{values.rideTime}</Text>
                                </TouchableOpacity>
                                <DatePicker
                                    mode="time"
                                    modal
                                    // rideTime
                                    name='rideTime'
                                    onChangeText={handleChange('rideTime')}
                                    open={openTime}
                                    date={time}
                                    minuteInterval={15}
                                    onConfirm={(date) => {
                                        setOpenTime(false)
                                        setTime(date)
                                        // setShowTime(false)
                                        // console.log(date);
                                        setRideTime(date.toLocaleTimeString())
                                    }}
                                    onCancel={() => {
                                        setOpenTime(false)
                                    }} />
                            </View>
                            <View style={styles.btn}>
                                <TouchableOpacity style={styles.buttonn} onPress={() => { handleSubmit(); console.log('vvvvvvvv'); }}>
                                    {/* <Text>onPress={() => navigation.navigate('Otp1')}</Text> */}
                                    <Text style={styles.btntxt}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

            )}
        </Formik>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    // container1: {
    //     // flex: 0.5,
    //     // backgroundColor: '#194af9',
    //     // justifyContent: 'center',
    //     // alignItems:'center',
    // },
    dropdown: {
        color: 'black',
        fontSize: 16,
        marginVertical: verticalScale(7),
        marginHorizontal: horizontalScale(5),
    },
    container2: {
        // flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#0D0F17',
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    box: {
        height: verticalScale(740),
        width: horizontalScale(350),
        // backgroundColor:'red',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        // shadowOpacity: 0.9,
        elevation: 5,
        // shadowRadius: 20,
        borderRadius: 8,
        padding: horizontalScale(15) && verticalScale(20),
    },
    img: {
        // marginTop: verticalScale(20),
        width: horizontalScale(90),
        height: verticalScale(90),
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#777',
    },
    textinput: {
        height: verticalScale(70),
        width: horizontalScale(285),
        marginTop: '2.5%',
        borderBottomWidth: 1,
        borderBottomColor: '#898989',
    },
    text2: {
        color: '#898989',
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        // marginBottom: verticalScale(-2),
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
        marginTop: verticalScale(15),
    },
    buttonn: {
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
        fontFamily: 'Poppins-Regular',
        fontWeight: '600',
        fontSize: 22,
    },
    validation: {
        color: 'red',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
    },
})

