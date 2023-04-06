import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-native-date-picker'
import { Dropdown } from 'react-native-element-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { horizontalScale, verticalScale } from '../helper/ Metrics';
import { useDispatch, useSelector } from 'react-redux';
import { getDriverInfo, postDriverInfo } from '../redux/action/driver.action';
import { getPincode } from '../redux/action/pincode.action';

export default function DriverRegister({navigation}) {
    const [err, setErr] = useState('');
    const [date, setDate] = useState(new Date())
    const [tdate, setTdate] = useState(new Date())
    const [time, setTime] = useState(new Date())

    const [open, setOpen] = useState(false)
    const [openTime, setOpenTime] = useState(false)

    const [show, setShow] = useState(true)
    const [showTime, setShowTime] = useState(true)
    
    const [genderValue, setValue] = useState(null);
    const [spin, setSPin] = useState(null);
    const [dpin, setDPin] = useState(null);

    const [vehicle, setVehicle] = useState(null);
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [dob, setDob] = useState()
    const [vehicalType, setVehicalType] = useState()
    const [rideTime, setRideTime] = useState()
    const [agee, setAgee] = useState()
    
    const dispatch = useDispatch()
    const pincodeData = useSelector(state => state.pincode);
    
    useEffect(() => {
        dispatch(getPincode())
    }, []);
    
    // console.log(pincodeData);
    
    const genderData = [
        { label1: 'Male', value: 'male' },
        { label1: 'Female', value: 'female' },
    ];
    
    const pinData = [];
    
    pincodeData.PinCodes.map((p) => {
        pinData.push({label1: p.pincode, value: p.pincode})
    });
    
    // console.log(pincodeData);
    
    const vehicleData = [
        { label1: 'Car', value: 'car' },
        { label1: 'Bike', value: 'bike' },
        { label1: 'Scooter', value: 'scooter' },
    ];
    
    const checkData = () => {
        let d = new Date(date);
        
        if ((new Date().getFullYear() - d.getFullYear()) < 18) {
            setErr("You are under 18.")
        } else {
            setErr("")
        }
    }

    const countAge = () => {
        const birthDate = new Date(date); // Replace with the actual birth date
        const ageDifMs = Date.now() - birthDate.getTime();
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);
        setAgee(age);
        // console.log(age); // Output: 33 (if current year is 2023)
    }
    
    
    ///////////////////////////////////////////////////////////
    
    const driverInfo = useSelector(state => state.DivReducer)

    useEffect(() => {
        countAge()
        dispatch(getDriverInfo())
    }, [])

    const addData = () => {
        let data = {
            firstName: firstName,
            lastName: lastName,
            dob: date,
            gender: genderValue,
            sourcePincode: spin,
            destinationPincode: dpin,
            vehicalType: vehicle,
            rideTime: rideTime,
            age: agee,
        }
        dispatch(postDriverInfo(data))
    }

    return (
        < >
            <View style={styles.container}>
                <View style={styles.subcontainer1}>
                    {/* <Text style={styles.text}>Driver Information</Text> */}
                </View>
                <View>
                    <TextInput placeholder='First Name' placeholderTextColor={'#898989'}  value={firstName} onChangeText={setFirstName} style={styles.textname} />

                    <TextInput placeholder='Last Name' placeholderTextColor={'#898989'} value={lastName} onChangeText={setLastName} style={styles.textname} />

                    <TouchableOpacity onPress={() => setOpen(true)}>
                        <Text style={[styles.textnamee]} >{show ? "DOB" : <Text style={styles.textname}>{date.toDateString()}</Text>}</Text>

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

                    <Text style={{ color: 'red' }}>{err}</Text>

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
                        value={genderValue}
                        itemTextStyle={{ color: 'black' }}
                        onChange={item => {
                            setValue(item.value);
                            // setgender(item.value);
                        }}


                    />
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
                        value={spin}
                        itemTextStyle={{ color: 'black' }}
                        onChange={item => {
                            setSPin(item.value);
                            // setPincode(item.value);
                        }}
                    />
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
                        value={dpin}
                        itemTextStyle={{ color: 'black' }}
                        onChange={item => {
                            setDPin(item.value);
                            // setPincode(item.value);
                        }}
                    />
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
                        value={vehicle}
                        itemTextStyle={{ color: 'black' }}
                        onChange={item => {
                            setVehicle(item.value);
                            // setVehicalType(item.value);
                        }}



                    />
                    <TouchableOpacity onPress={() => setOpenTime(true)} >
                        <Text style={[styles.textnamee]}>{showTime ? "Ride Time" : <Text style={styles.textname}>{time.toLocaleTimeString()}</Text>}</Text>
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
                            setShowTime(false)
                            // console.log(date);
                            setRideTime(date.toLocaleTimeString())
                        }}
                        onCancel={() => {
                            setOpenTime(false)
                        }} />
                    <View style={styles.button1}>
                        <TouchableOpacity style={styles.button} onPress={()=>{countAge(); addData(); checkData(); navigation.navigate('DriverDashboard');}}>
                            <Text style={styles.btnText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: 'white',
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
        // margin: 30,
        marginTop: verticalScale(20)
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
        marginTop: verticalScale(20)
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
        // alignItems: 'center',
        // backgroundColor: '#194AF9',
        // marginHorizontal: horizontalScale(25),
        // paddingHorizontal: horizontalScale(25),
        // paddingVertical: 15,
        // borderRadius: 90,
        // marginHorizontal: 15,
        // marginTop: 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#194AF9',
        borderRadius: 90,
        height: verticalScale(60),
        width: horizontalScale(320),
    },
    boxtext: {
        borderWidth: 1,
        fontSize: 20,
        borderRadius: 10,
        borderColor: '#B6B6B6',
        marginTop: 20,
        // padding: 10,
        color: '#898989',
    },
    bold: {
        color: '#000'
    },
    button1: {
        alignItems: 'center',
    },
})