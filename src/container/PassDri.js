import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale } from '../helper/ Metrics'

export default function PassDri({navigation}) {
  return (
    <View style={style.container}>
        <View style={style.info}>
            <Text style={style.infotext}>Are You a Employee or a Driver?</Text>
        </View>
        <View style={style.img}>
            {/* <Text style={style.dummy}>Hello</Text> */}
            <Image source={require('../../src/assets/image/PassDri.png')} style={style.logo}/>
        </View>
        <View style={style.btn}>
            <TouchableOpacity onPress={() => navigation.navigate('WelToRide')}>
                <Text style={style.btnpass}>Passenger</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('DriverRegistration')}>
                <Text style={style.btndri}>Driver</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        padding:40,
        // paddingHorizontal:50,
        alignItems:'center',
    },
    info:{
        // flex:0.6,
        justifyContent:'center',
    },
    infotext:{
        textAlign:'center',
        color:'black',
        fontSize:22,
        fontWeight:600,
        fontFamily:'Poppins-SemiBold',
    },
    img:{
        flex:2,
        // width: '115%',
        marginTop:'15%',
        // width:horizontalScale(325),
        alignItems:'center',
    },
    logo:{
        // width: '90%',
        width:horizontalScale(295),
        // height: '85%',
        height:verticalScale(310),
    },
    btn:{
        flex:1,
        // width:'105%',
        height:verticalScale(55),
        // paddingHorizontal:horizontalScale(120),
        width:horizontalScale(295),
    },
    btnpass:{
        backgroundColor:'#194af9',
        color:'white',
        padding:8,
        borderRadius:30,
        textAlign:'center',
        fontSize:22,
        marginTop:50,
        fontFamily:'Poppins-SemiBold',
    },
    btndri:{
        backgroundColor:'#B6B6B6',
        color:'black',
        padding:8,
        borderRadius:30,
        textAlign:'center',
        marginTop:20,
        fontSize:22,
        fontWeight:600,
        fontFamily:'Poppins-SemiBold',
    }
})