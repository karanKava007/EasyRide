import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale } from '../helper/ Metrics'
import { TextInput } from 'react-native-gesture-handler'


export default function AvailDri() {
  return (
    <View style={styles.container}>
      <View style={[styles.card, styles.shadowProp]}>
        <Image style={styles.img} source={require('../../src/assets/image/Ellipse6.png')} />
        <View>
          <Text style={styles.txt} >Name: <Text style={styles.txt3}>John</Text></Text>
          <Text style={styles.txt} >{'Source > Destination'}</Text>
          <View style={styles.container2}>
            <Text style={styles.txt} >Age: <Text style={styles.txt3}>18</Text></Text>
            <Text style={styles.txt} >Ride Price: <Text style={styles.txt3}>150/-</Text></Text>
          </View>
          <Text style={styles.txt} >Ride Time: <Text style={styles.txt3}>4-00 pm</Text></Text>
        </View>
      </View>
      <View style={styles.btn}>
            <View style={styles.btn1}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.txt1}>Deny</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btn2}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.txt2}>Accept</Text>
              </TouchableOpacity>
            </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    height: verticalScale(190),
    width: horizontalScale(330),
    marginTop: '5%',
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom:verticalScale(-55)
    // borderWidth: 1,
    // borderRadius: 10,
    // paddingVertical: 45,  
    // paddingHorizontal: 25,  
    // width: '90%',
    // marginVertical: 10,
  },
  shadowProp: {
    elevation: 10,
    //   shadowOffset: {width: -20, height: 4},  
    //   shadowColor: 'black',  
    //   shadowOpacity: 0.9,  
    //   shadowRadius: 3,  
  },
  img: {
    width: horizontalScale(65),
    height: verticalScale(70),
    borderRadius: 50,
    marginTop: verticalScale(6),
    marginLeft: horizontalScale(7),
  },
  txt: {
    color: '#898989',
    marginTop: verticalScale(5),
    marginLeft: horizontalScale(14),
    fontFamily: 'Poppins-Light',
    marginTop: verticalScale(7)
  },
  txt3: {
    color: 'black',
  },
  container2: {
    flexDirection: 'row',
  },
  txt1: {
    color: 'red',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  txt2: {
    color: 'green',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  btn: {
    // flex:1,
    // backgroundColor:'black',
    flexDirection: 'row',
    // justifyContent: 'center',
    marginTop: verticalScale(25),
    borderTopWidth: 1,
    backgroundColor: 'white',
    height: verticalScale(30),
    width: horizontalScale(330),
    // marginTop: '5%',
    borderRadius: 10,
    borderTopLeftRadius:1,
    borderTopRightRadius:1,
    borderColor:'#898989',
    marginTop:verticalScale(15),
    paddingTop:verticalScale(5),
  },
  btn1: {
    flex:1,
    alignItems:'center',
    // backgroundColor:'black',

    // paddingRight: horizontalScale(85),
  },
  btn2: {
    flex:1,
    alignItems:'center',
    // backgroundColor:'black',

    // borderLeftWidth:1,
    // flex:1,
    // paddingRight:90,
    // borderTopWidth:1,
  },
});  
