import { View, Text, StyleSheet, Image, TouchableOpacity, Icon, TextInput,Button } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-native-date-picker'
import { horizontalScale, verticalScale } from '../helper/ Metrics';
import { set } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

const data1 = [

    { label1: '395008', value: '1' },
    // { label1: '395004', value: '3' },
    // { label1: '394150', value: '2' },
    // { label1: '395009', value: '4' },
    // { label1: '395050', value: '5' },
    // { label1: 'Item 6', value: '6' },
    // { label1: 'Item 7', value: '7' },
    // { label1: 'Item 8', value: '8' },
];
const data2 = [

    { label2: '395004', value: '1' },
    // { label2: '395008', value: '2' },
    // { label2: '394150', value: '3' },
    // { label2: '395009', value: '4' },
    // { label2: '395050', value: '5' },
    // { label2: 'Item 6', value: '6' },
    // { label2: 'Item 7', value: '7' },
    // { label2: 'Item 8', value: '8' },
];

const data3 = [

    { label3: 'Item 1', value: '1' },
    { label3: 'Item 2', value: '2' },
    { label3: 'Item 3', value: '3' },
    { label3: 'Item 4', value: '4' },
    { label3: 'Item 5', value: '5' },
    { label3: 'Item 6', value: '6' },
    { label3: 'Item 7', value: '7' },
    { label3: 'Item 8', value: '8' },
];

export default function Dashbord({ navigation }) {
    const [value, setValue] = useState(null);
    const [Tvalue, setTvalue] = useState(null);
    const [time, setTime] = useState(new Date())
    const [stime, setStime] = useState(new Date())
    const [openTime, setOpenTime] = useState(false)
    const [showTime, setShowTime] = useState(true)
    const [selectedValue1, setSelectedValue1] = useState('395008');
    const [selectedValue2, setSelectedValue2] = useState('395004');
    const [c, setC] = useState(null);
    const [returnvalue , setReturnvalue] = useState(null)

    useEffect(() => {
        if (selectedValue1 === '395008' && selectedValue2 === '395004') {
            setC('8');
        }
        else {
            setC(null);
        }
    }, [selectedValue1, selectedValue2])

    // const PriceCalculator = () => {
    //     // const [distance, setDistance] = useState('');
    //     const pricePerKm = 10;
    // }
    const pricePerKm = 10;
    const calculatePrice = (pricePerKm , setC) => {
            
            const price = pricePerKm * parseInt(setC);
            setReturnvalue (price);
        }
    

    return (
        <View style={styles.container}>
            <View style={styles.subconatiner1}>
                <Image source={require('../assets/image/Screenshot.png')} style={styles.map} />
            </View>
            <View style={styles.subcontainer2}>
                <View style={{ flex: 1, flexDirection: 'row' }}>

                    <TouchableOpacity style={styles.vectorbtn} onPress={() => {
                        console.log('You tapped the button!');
                    }}>
                        <Image source={require('../assets/image/car.png')} style={styles.img} />
                        <Text style={styles.vectorText1}>Car</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.vectorbtn}>
                        <Image source={require('../assets/image/scooter.png')} style={styles.img2} />
                        <Text style={styles.vectorText}>Scooter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.vectorbtn}>
                        <Image source={require('../assets/image/bike.png')} style={styles.img3} />
                        <Text style={styles.vectorText}>Bike</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 3 }}>
                    <Dropdown
                        // value={395008}
                        selectedValue={selectedValue1}
                        
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data1}
                        search
                        maxHeight={300}
                        labelField="label1"
                        valueField="value"
                        placeholder="Source"
                        searchPlaceholder="Search Sourcce."
                        Tvalue={value}
                        itemTextStyle={{ color: 'black' }}
                        onChange={item => {
                            setValue(item.value);
                        }}
                        renderLeftIcon={() => (
                            <MaterialCommunityIcons style={styles.icon} color="black" name="source-commit-start" size={20} />
                        )}

                    />
                    <Dropdown
                        // value={395008}
                        selectedValue={selectedValue2}
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data2}
                        search
                        maxHeight={300}
                        labelField="label2"
                        valueField="value"
                        placeholder="Destination"
                        searchPlaceholder="Search Destination."
                        Tvalue={Tvalue}
                        itemTextStyle={{ color: 'black' }}
                        onChange={item => {
                            setValue(item.value);
                        }}
                        renderLeftIcon={() => (
                            <MaterialCommunityIcons style={styles.icon} color="black" name="source-commit-end" size={20} />
                        )}
                    />
                    <TouchableOpacity onPress={() => setOpenTime(true)} >
                        <Text style={[styles.textnamee]}>{showTime ? <Text style={styles.textname1}> <MaterialCommunityIcons style={styles.icon} color="black" name="clock-time-nine-outline" size={20} /> Time</Text> : <Text style={styles.textname}>{time.toLocaleTimeString()}</Text>}</Text>
                    </TouchableOpacity>
                    <DatePicker
                        mode="time"
                        modal
                        open={openTime}
                        date={time}
                        minimumDate={stime}
                        onConfirm={(date) => {
                            setOpenTime(false)
                            setTime(date)
                            setShowTime(false)
                            // console.log(date);
                        }}
                        onCancel={() => {
                            setOpenTime(false)
                        }}
                    />
                    {/* <TextInput /> */}
                    <View>
                        <Button
                            title="Calculate Price"
                            onPress={()=>calculatePrice(pricePerKm,setC)}
                            // onPress={()=>calculatePrice(pricePerKm,setC)}
                        >
                        </Button>
                        <Text style={styles.txt}>
                        {returnvalue && <Text style={styles.txt}>Price: {returnvalue}</Text>}
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AvailDri')}>
                        <Text style={styles.btnText}>Find Driver</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subconatiner1: {
        flex: 4.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    subcontainer2: {
        flex: 5,
        backgroundColor: 'white',
        borderTopLeftRadius: 33,
        borderTopRightRadius: 33,

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
        // marginTop:'10%'
        color: '#0D0F17',
        fontSize: 12,
        marginTop: '5%'
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
        height: '50%',
    },
    img2: {
        width: '53%',
        height: '60%',
    },
    img3: {
        width: '59%',
        height: '61%',
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
    txt:{
        // flex:1,
        color:'black',
        fontSize:40,
        textAlign:'center',
    },
})
// export default PriceCalculator;