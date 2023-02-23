import { View, Text, StyleSheet, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
export default function Otp1() {
  return (
    <View style={Styles.container}>
        <View style={Styles.v1}>
            <Text style={Styles.t1}>Otp Verification</Text>
        </View>
        <View style={Styles.v2}>
            <Text style={Styles.t2}>Enter the verification code we just send on phone number</Text>
            <View style={[Styles.v3,Styles.shadowProp]}>
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
    </View>

  )
}
const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        padding:'6%',
    },
    v1:{
        flex:1,
        // backgroundColor:'red',
        justifyContent:'flex-end',
    },
    t1:{
        color:'black',
        textAlign:'center',
        fontSize:22,
        fontFamily:'Poppins-SemiBold',
        fontWeight:600,
    },
    v2:{
        flex:5,
        // backgroundColor:'green',
    },
    t2:{
        fontSize:16,
        textAlign:'center',
        marginTop:'6%',
        color:'#898989'
    },
    v3:{ 
        flexDirection:'row',
        // backgroundColor:'red',
        alignContent:'center',
        justifyContent:'center',
        height:'15%',
        columnGap: 15,
        borderColor:'black',
        marginTop:'10%',
    },
    box:{
        marginTop:'5%',
        color:'black',
        borderWidth:1,
        borderRadius:20,
        width:'20%',
        textAlign:'center',
        fontSize:20,
        fontWeight:'900',
    },
    button:{
        width: '100%',
        // height:'100%',
        alignItems: 'center',
        marginTop:'15%'
    },
    btn:{
    backgroundColor: '#194AF9',
    height:'30%',
    paddingHorizontal:'35%',
    borderRadius: 30,
    justifyContent:'center',
    alignItems:'center',
    },
    btntxt:{
        fontFamily:'Poppins-SemiBold',
        fontSize:22,
        fontWeight:600,
        justifyContent:'center',
        color:'white',
    }
})