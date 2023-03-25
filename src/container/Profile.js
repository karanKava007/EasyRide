import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale } from '../helper/ Metrics'
import { ScrollView } from 'react-native-gesture-handler'

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
      </View>
      <View style={styles.container2}>
        <View style={styles.box}>
          <Image style={styles.img} source={require('../../src/assets/image/Ellipse6.png')} />
          {/* <Text style={styles.text2}>John Doe</Text> */}
          <View style={styles.textinput}>
            <Text style={styles.text2}>Full Name:</Text>
            <TextInput placeholder="John" style={styles.h1} placeholderTextColor="black" />
          </View>

          <View style={styles.textinput}>
            <Text style={styles.text2}>Age:</Text>
            <TextInput placeholder="18" style={styles.h1} placeholderTextColor="black" />
          </View>

          <View style={styles.textinput}>
            <Text style={styles.text2}>Date Of Birth:</Text>
            <TextInput placeholder="26-11-2004" style={styles.h1} placeholderTextColor="black" />
          </View>

          <View style={styles.textinput}>
            <Text style={styles.text2}>E-Mail:</Text>
            <TextInput placeholder="John004@gmail.com" style={styles.h1} placeholderTextColor="black" />
          </View>

          <View style={styles.textinput}>
            <Text style={styles.text2}>Mobile Number:</Text>
            <TextInput placeholder="+91 99734-89210" style={styles.h1} placeholderTextColor="black" />
          </View>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.button}>
              {/* <Text>onPress={() => navigation.navigate('Otp1')}</Text> */}
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
  container1: {
    flex: 0.5,
    backgroundColor: '#194af9',
    // justifyContent: 'center',
    // alignItems:'center',
  },
  text: {
    color: 'white',
    fontSize: 35,
    fontFamily: 'Poppins-Medium',
    // alignContent:'center',
  },
  container2: {
    flex: 6,
    // flexDirection:'row',
    // backgroundColor:'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: '96%',
    width: '94%',
    // backgroundColor:'red',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    // shadowOpacity: 0.9,
    elevation: 5,
    // shadowRadius: 20,
    borderRadius:8,
    padding:horizontalScale(15) && verticalScale(20),
  },
  img: {
    marginTop: verticalScale(20),
    width: '30%',
    height: '15%',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#777',
  },
  // text2:{
  //   color:'black',
  //   fontSize:20,
  //   fontFamily: 'Poppins-Regular',
  // },
  textinput: {
    // flex:5,
    height: '10%',
    width: '90%',
    marginTop: '5%',
    // flexDirection:'row',
    // backgroundColor:'green',
    borderBottomWidth: 1,
    borderBottomColor: '#898989',
  },
  text2: {
    color: '#898989',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: '-1%',
  },
  h1: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  btn: {
    marginTop: '10%',
  },
  button: {
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
    fontWeight: '600',
    fontSize: 19
  },
})