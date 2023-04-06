import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { horizontalScale, verticalScale } from '../helper/ Metrics'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { getDriverInfo, postDriverInfo, putDriverInfo } from '../redux/action/driver.action'
import { Dropdown } from 'react-native-element-dropdown'
import DatePicker from 'react-native-date-picker'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
    const driverInfo = useSelector(state => state.DivReducer)
    const [open, setOpen] = useState(false)
    const [openTime, setOpenTime] = useState(false)
    const [show, setShow] = useState(true)
    const [tdate, setTdate] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [spin, setSPin] = useState(null);
    const [dpin, setDPin] = useState(null);
    const pincodeData = useSelector(state => state.pincode);

    useEffect(() => {
        setId(driverInfo.driver.id)
        setFirstName(driverInfo.driver.firstName)
        setLastName(driverInfo.driver.lastName)
        setValue(driverInfo.driver.gender)
        setDob(driverInfo.driver.dob.getFullYear() + "/" + (driverInfo.driver.dob.getMonth() + 1) + "/" + driverInfo.driver.dob.getDate())
        setVehicle(driverInfo.driver.vehicalType)
        setRideTime(driverInfo.driver.rideTime)
        setSPin(driverInfo.driver.sourcePincode)
        setDPin(driverInfo.driver.destinationPincode)
    }, [])


    const pinData = [];
    
    pincodeData.PinCodes.map((p) => {
        pinData.push({label1: p.pincode, value: p.pincode})
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
    const UpdateDriver = () => {
        let upDriver = {
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
        dispatch(putDriverInfo(upDriver))
    }

    const genderData = [
        { label1: 'Male', value: 'male' },
        { label1: 'Female', value: 'female' },
    ];

    const vehicleData = [
        { label1: 'Car', value: 'car' },
        { label1: 'Bike', value: 'bike' },
        { label1: 'Scooter', value: 'scooter' },
    ];
    // console.log(driverInfo.driver.dob.getDate());
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
            </View>
            <View style={styles.container2}>
                <View style={styles.box}>
                    <Image style={styles.img} source={require('../../src/assets/image/Ellipse11.png')} />
                    {/* <Text style={styles.text2}>John Doe</Text> */}
                    <View style={styles.textinput}>
                        <Text style={styles.text2}>First Name:</Text>
                        <TextInput value={firstName} onChangeText={setFirstName} style={styles.h1} placeholderTextColor="black" />
                        {/* <MaterialIcons name="edit" size={40} color='black' onPress={() => handleUpdate(driverInfo)}/> */}
                    </View>
                    {/* <View style={styles.textinput}>
                        <Text style={styles.text2}>Last Name:</Text>
                        <TextInput value={lastName} onChangeText={setLastName} style={styles.h1} placeholderTextColor="black" />
                    </View> */}

                    <View style={styles.textinput}>
                        <Text style={styles.text2}>Gender</Text>
                        {/* <TextInput placeholder="18" value={driverInfo.driver.gender} style={styles.h1} placeholderTextColor="black" />  */}
                        <Dropdown
                            style={[styles.dropdown, styles.h1]}
                            // placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            iconStyle={styles.iconStyle}
                            data={genderData}
                            maxHeight={300}
                            labelField="label1"
                            valueField="value"
                            placeholder="Gender"
                            value={genderValue}
                            onChangeText={setValue}
                            itemTextStyle={{ color: 'black' }}
                            onChange={item => {
                                setValue(item.value);
                                // setgender(item.value);
                            }} />
                    </View>

                    <View style={styles.textinput}>
                        <Text style={styles.text2}>Date Of Birth:</Text>
                        {/* <TextInput  value={driverInfo.driver.dob.getFullYear() + "/" + (driverInfo.driver.dob.getMonth() + 1) + "/" + driverInfo.driver.dob.getDate()} style={styles.h1} placeholderTextColor="black" /> */}
                        <TouchableOpacity onPress={() => setOpen(true)}>
                            {/* <TextInput  value={driverInfo.driver.dob.getFullYear() + "/" + (driverInfo.driver.dob.getMonth() + 1) + "/" + driverInfo.driver.dob.getDate()} style={styles.h1}/> */}
                            <Text style={styles.h2} onChangeText={setDob}>{dob}</Text>

                        </TouchableOpacity>
                        <DatePicker
                            mode="date"
                            modal
                            open={open}
                            date={date}
                            maximumDate={tdate}
                            onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
                                setShow(false)
                                setDob(date.toDateString())
                                // console.log(date);
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }} />

                    </View>

                    <View style={styles.textinput}>
                        <Text style={styles.text2}>Vehical Type:</Text>
                        {/* <TextInput placeholder="Car/Bike/Scooter" value={driverInfo.driver.vehicalType} style={styles.h1} placeholderTextColor="black" /> */}
                        <Dropdown
                            style={styles.dropdown}
                            // placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            iconStyle={styles.iconStyle}
                            data={vehicleData}
                            maxHeight={300}
                            labelField="label1"
                            valueField="value"
                            placeholder="Vehical Type"
                            value={vehicle}
                            onChangeText={setVehicle}
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
                            maxHeight={300}
                            labelField="label1"
                            valueField="value"
                            placeholder="Gender"
                            value={spin}
                            onChangeText={setSPin}
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
                            maxHeight={300}
                            labelField="label1"
                            valueField="value"
                            placeholder="Gender"
                            value={dpin}
                            onChangeText={setDPin}
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
                            <Text style={styles.h2} onChangeText={setRideTime}>{rideTime}</Text>
                        </TouchableOpacity>
                        <DatePicker
                            mode="time"
                            modal
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
                        <TouchableOpacity style={styles.buttonn} onPress={() => UpdateDriver()}>
                            <Text style={styles.btntxt}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
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
})