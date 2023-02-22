import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'

export default function PassDri() {
  return (
    <View style={style.container}>
        <View style={style.info}>
            <Text style={style.infotext}>Are You a Passenger or a Driver?</Text>
        </View>
        <View style={style.img}>
            {/* <Text style={style.dummy}>Hello</Text> */}
            <Image source={require('../../src/assets/image/PassDri.png')} style={style.logo}/>
        </View>
        <View style={style.btn}>
            <TouchableOpacity>
                <Text style={style.btnpass}>Passenger</Text>
            </TouchableOpacity>
            <TouchableOpacity>
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
        padding:30,
        // paddingHorizontal:50,
        alignItems:'center',
    },
    info:{
        flex:1,
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
        width: '115%',
        // justifyContent:'center',
        // // marginHorizontal: 20,
        alignItems:'center',
        // padding:20,
        // backgroundColor: 'red'
    },
    logo:{
        width: '90%',
        height: '90%',
    },
    btn:{
        flex:1,
    //    marginTop:100,
        width:'105%',
    },
    btnpass:{
        backgroundColor:'#194af9',
        color:'white',
        padding:8,
        borderRadius:30,
        textAlign:'center',
        fontSize:22,
        marginTop:30,
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