import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { horizontalScale, moderateScale, verticalScale } from '../helper/ Metrics';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function City({ navigation }) {
  return (
      <View style={styles.container}>

        <View style={styles.vi}>
          <Text style={styles.text} >Are You In This City?</Text>
        </View>

        <View style={styles.img}>
          <Image source={require('../assets/image/location.png')} />
          <Text style={styles.text2}>Surat</Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('PassDri')}>
            <Text style={styles.btn}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  vi: {
    flex: 1
  },
  text: {
    marginTop: verticalScale(83),
    fontSize: moderateScale(25),
    fontWeight: 600,
    color: 'black',
    textAlign: 'center'
  },
  img: {
    flex: 3,
    alignItems: 'center',
    marginTop: verticalScale(100),
  },
  text2: {
    marginTop: verticalScale(20),
    fontWeight: 500,
    fontSize: moderateScale(25),
    color: 'black'
  },
  btn: {
    backgroundColor: 'blue',
    color: 'white',
    padding: horizontalScale(15) && verticalScale(15),
    borderRadius: 30,
    margin: horizontalScale(20) && verticalScale(20),
    textAlign: 'center',
    fontSize: moderateScale(22),
  }
})