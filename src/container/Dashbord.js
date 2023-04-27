import { View, Text, StyleSheet, Image, TouchableOpacity, Icon, TextInput, Button, PermissionsAndroid } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-native-date-picker'
import { horizontalScale, verticalScale } from '../helper/ Metrics';
import { set } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import { getPincode, PinGetData } from '../redux/action/pincode.action';
import { useDispatch, useSelector } from 'react-redux';
import MapView from 'react-native-maps';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from "react-native-geolocation-service";
import { getDriverInfoReq } from '../redux/action/AvailDri.action';

const requestLocationPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Geolocation Permission',
                message: 'Can we access your location?',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        console.log('granted', granted);
        if (granted === 'granted') {
            console.log('You can use Geolocation');
            return true;
        } else {
            console.log('You cannot use Geolocation');
            return false;
        }
    } catch (err) {
        return false;
    }
};

export default function Dashbord({ navigation }) {
    const [value, setValue] = useState(null);
    const [Tvalue, setTvalue] = useState(null);
    const [time, setTime] = useState(new Date())
    const [stime, setStime] = useState(new Date())
    const [openTime, setOpenTime] = useState(false)
    const [showTime, setShowTime] = useState(true)
    const dispatch = useDispatch()

    const [isSelected1, setIsSelecteed1] = useState(false)
    const [isSelected2, setIsSelecteed2] = useState(false)
    const [isSelected3, setIsSelecteed3] = useState(false)
    const [vehicalTypeData, setVehicalTypeData] = useState('')

    const [region, setRegion] = useState(null);
    const mapRef = useRef(null);

    const [location1, setLocation1] = useState({
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    });

    const buttonHandler1 = () => {
        setIsSelecteed1(true);
        setIsSelecteed2(false);
        setIsSelecteed3(false);
        setVehicalTypeData('car')
    }
    const buttonHandler2 = () => {
        setIsSelecteed1(false);
        setIsSelecteed2(true);
        setIsSelecteed3(false);
        setVehicalTypeData('scooter')
    }

    const buttonHandler3 = () => {
        setIsSelecteed1(false);
        setIsSelecteed2(false);
        setIsSelecteed3(true);
        setVehicalTypeData('bike')
    }
    const pincodeData = useSelector(state => state.pincode);

    useEffect(() => {
        getLocation()
            .then((response) => console.log(response.coords.latitude, response.coords.longitude));
        dispatch(getPincode())
    }, []);


    const getLocation = async () => {
        return new Promise((resolve, reject) =>
            Geolocation.getCurrentPosition(
                (position) => {
                    resolve(position);
                    // console.log('iiiiiiiiiiiiiiiiiiiiiiiiii', position.coords.latitude);
                    const { latitude, longitude } = position.coords;
                    setLocation1({
                        latitude,
                        longitude,
                        latitudeDelta: 0.001,
                        longitudeDelta: 0.001,
                    })
                    setRegion({
                        latitude,
                        longitude,
                        latitudeDelta: 0.001,
                        longitudeDelta: 0.001,
                    });
                },
                (error) => {
                    reject(error);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 15000,
                }
            )
        );
    };


    const pinData = [];

    pincodeData.PinCodes.map((p) => {
        pinData.push({ label1: p.pincode, value: p.pincode })
    });






    const handleRide = () => {
        data = {
            vehicalType: vehicalTypeData,
            sourcePincode: value,
            destinationPincode: Tvalue,
            time: time.toLocaleTimeString().toLowerCase(),
        }
        dispatch(getDriverInfoReq(data))

    }

    return (
        <View style={styles.container}>
            <View style={styles.subconatiner1}>
                <MapView
                    style={styles.map}
                    initialRegion={region}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    showsMyLocationButton={true}
                    rotateEnabled={true}>
                    <Marker
                        style={styles.marker}
                        title='Yor are here'
                        description='Find Your Next Ride With EasyRide'
                        coordinate={location1}

                    />
                </MapView>
            </View>
            <View style={styles.subcontainer2}>
                <View style={{ flex: 1, flexDirection: 'row' }}>

                    <TouchableOpacity style={isSelected1 === true ? styles.vectorbtnselected : styles.vectorbtn} onPress={() => buttonHandler1()}>
                        <Image source={require('../assets/image/car.png')} style={styles.img} />
                        <Text style={styles.vectorText1}>Car</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={isSelected2 === true ? styles.vectorbtnselected : styles.vectorbtn} onPress={() => buttonHandler2()}>
                        <Image source={require('../assets/image/scooter.png')} style={styles.img2} />
                        <Text style={styles.vectorText}>Scooter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={isSelected3 === true ? styles.vectorbtnselected : styles.vectorbtn} onPress={() => buttonHandler3()}>
                        <Image source={require('../assets/image/bike.png')} style={styles.img3} />
                        <Text style={styles.vectorText}>Bike</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 3 }}>
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
                        placeholder="Source"
                        searchPlaceholder="Search Sourcce."
                        value={value}
                        itemTextStyle={{ color: 'black' }}
                        onChange={item => {
                            setValue(item.value);
                        }}
                        renderLeftIcon={() => (
                            <MaterialCommunityIcons style={styles.icon} color="black" name="source-commit-start" size={20} />
                        )}

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
                        placeholder="Destination"
                        searchPlaceholder="Search Destination."
                        value={Tvalue}
                        itemTextStyle={{ color: 'black' }}
                        onChange={item => {
                            setTvalue(item.value);
                        }}
                        renderLeftIcon={() => (
                            <MaterialCommunityIcons style={styles.icon} color="black" name="source-commit-end" size={20} />
                        )}
                    />
                    <TouchableOpacity onPress={() => setOpenTime(true)} >
                        <Text style={[styles.textnamee]}>{showTime ? <Text style={styles.textname1}> <MaterialCommunityIcons style={styles.icon} color="black" name="clock-time-nine-outline" size={20} /> Time</Text> : <Text style={styles.textname}> <MaterialCommunityIcons style={styles.icon} color="black" name="clock-time-nine-outline" size={20} /> {time.toLocaleTimeString()}</Text>}</Text>
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
                        }}
                        onCancel={() => {
                            setOpenTime(false)
                        }} />

                    <TouchableOpacity style={styles.button} onPress={() => { handleRide(); navigation.navigate('AvailDri'); }}>
                        <Text style={styles.btnText}>Find Driver</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    subconatiner1: {
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '55%',
    },
    container: {
        flex: 1,
    },
    subconatiner1: {
        flex: 4.5,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    subcontainer2: {
        flex: 5,
        backgroundColor: 'white',
        borderTopLeftRadius: 33,
        borderTopRightRadius: 33,
        position: 'absolute',
        width: '100%',
        bottom: 0,
        height: '50%'


    },
    marker: {
        width: 100,
        height: 100,
    },
    vectorbtn: {
        width: '20%',
        marginTop: 10,
        height: '70%',
        marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.7)',
        shadowOpacity: 0.9,
        elevation: 10,
        shadowRadius: 20,
    },
    vectorText: {
        color: '#0D0F17',
        // fontFamily: 'Poppins-Black',
        fontSize: 12,
    },
    vectorText1: {
        // marginTop:'10%',
        color: '#0D0F17',
        fontSize: 12,
        marginTop: '6%'
    },
    dropdown: {
        margin: 10,
        height: '15%',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        color: '#898989',

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
        fontSize: 15,
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
    button: {
        backgroundColor: '#194AF9',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 90,
        marginHorizontal: 30,
        marginTop: '6%',

    },
    btnText: {
        color: '#FFFFFF',
        fontWeight: 600,
        fontSize: 22,
        fontFamily: 'Poppins-SemiBold'
    },
    img: {
        width: '80%',
        height: '54%',
    },
    img2: {
        width: '53%',
        height: '64%',
    },
    img3: {
        width: '59%',
        height: '64%',
    },
    textname: {
        color: 'black'
    },
    textname1: {
        color: '#898989'
    },
    textnamee: {
        color: '#868686',
        fontSize: 16,
        // paddingHorizontal: horizontalScale(5),
        paddingVertical: verticalScale(14),
        borderColor: '#898989',
        // borderRadius: 10,
        borderBottomWidth: 1,
        marginHorizontal: horizontalScale(10),
        marginVertical: verticalScale(12),
    },
    txt: {
        // flex:1,
        color: 'black',
        fontSize: 40,
        textAlign: 'center',
    },
    vectorbtnselected: {
        width: '20%',
        marginTop: 10,
        height: '70%',
        marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: 'rgba(25,74,249,0.7)',
        shadowOpacity: 0.9,
        elevation: 10,
        shadowRadius: 20,
        borderColor: 'rgba(25,74,249,0.5)',
        borderWidth: 2.5,
    },
})