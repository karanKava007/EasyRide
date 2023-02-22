import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Otp() {
    return (
        <View style={Styles.container}>
            <View style={Styles.heading}>
                <Text style={Styles.title}>OTP Verification</Text>
            </View>
            <View style={Styles.verificationtxt}>
                <Text style={Styles.vartxt}>Enter the verification code we just send on phone number</Text>
            </View>
            <View style={[Styles.otpbox,Styles.shadowProp]}>
                <TextInput style={Styles.box}>1</TextInput>
                <TextInput style={Styles.box}>2</TextInput>
                <TextInput style={Styles.box}>3</TextInput>
                <TextInput style={Styles.box}>4</TextInput>
            </View>
            <View style={Styles.button}>
                <TouchableOpacity style={Styles.btn} onPress={this.onPress}>
                    <Text style={Styles.btntxt}>Verify</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        padding: '3%',
        flex: 1,
        backgroundColor: '#FFF'
    },
    heading: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        paddingBottom: '10%'
    },
    title: {
        textAlign: 'center',
        width: '100%',
        fontWeight: '600',
        color: '#000',
        fontSize: 22,
        fontFamily:'Poppins-SemiBold'
    },
    verificationtxt: {
        width: '100%',
    },
    vartxt: {
        color:'#898989',
        marginHorizontal: '3%',
        textAlign: 'center',
    },
    otpbox: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        columnGap: 15,
        alignItems: 'center',
        paddingLeft: '6%',

    },
    shadowProp: {  
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#ff0000',  
        shadowOpacity: 10,  
        shadowRadius: 30,  
      }, 
    box: {
        color:'#000',
        borderRadius:15,
        fontSize: 23,
        fontWeight: '600',
        textAlign: 'center',
        borderWidth: 2,
        width: '20%',
        height: '45%',
        // borderColor:null,
    },
    button: {
        flex: 2,
        width: '100%',
        // backgroundColor:'red',
        alignItems: 'center',
        marginTop:'6%',
    },
    btn:{
        backgroundColor: '#194AF9',
        width: '90%',
        height: '16%',
        // paddingTop: '4%',
        // alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 30,
    },
    btntxt:{
        color:'#FFF',
        fontWeight:600,
        fontSize:22,
        textAlign:'center',
        fontFamily:'Poppins-SemiBold'
    },
})