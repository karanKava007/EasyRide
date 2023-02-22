import { Text, View, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';

export default function WelToEasyRide() {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    return (

        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.h2}>Welcome To Easy Ride!</Text>
                <Text style={styles.h3}>Let's Get acquainted</Text>
            </View>
            <View style={styles.boxtextm}>
                <TextInput placeholder='First Name' style={styles.box} placeholderTextColor="#898989"></TextInput>
                <TextInput placeholder='Last Name' style={styles.box} placeholderTextColor="#898989"></TextInput>
                {/* <TextInput placeholder='DOB' style={styles.box} placeholderTextColor="#898989" onPress={() => setOpen(true)}></TextInput> */}
                {/* <Button title="DOB" onPress={() => setOpen(true)} style={styles.box}  /> */}
                <TouchableOpacity  onPress={() => setOpen(true)}>
                    <Text style={styles.boxtext} >DOB</Text>
                </TouchableOpacity>
                <DatePicker
                    mode="date"
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }} />
            </View>

            <View style={styles.buttonSection}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        padding: 20,

    },

    h2: {
        // textAlign:'center',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 80,
        fontFamily: 'Poppins-SemiBold',
        color: '#0D0F17',

    },

    h3: {
        marginTop: 10,
        fontFamily: 'Poppins',
        fontSize: 17,
        color: '#898989',
        marginBottom: 20
    },

    box: {
        borderWidth: 1,
        fontSize: 20,
        borderRadius: 10,
        borderColor: '#B6B6B6',
        marginTop: 20,
        padding: 10,
        color: '#0D0F17',
    },

    btnText: {
        color: '#FFFFFF',
        fontWeight: 800,
        fontSize: 22,
        fontFamily: 'Poppins-SemiBold'
    },

    buttonSection: {
        flex: 1,
        // backgroundColor: 'black',
        justifyContent: 'flex-end',
        color: 'black',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#194AF9',
        marginHorizontal: 25,
        marginTop: 150,
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 90,
        marginHorizontal: 15,
    },
    boxtext:{
        borderWidth: 1,
        fontSize: 20,
        borderRadius: 10,
        borderColor: '#B6B6B6',
        marginTop: 20,
        padding: 10,
        color: '#898989',
    }

})