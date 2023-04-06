import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { horizontalScale, verticalScale } from '../helper/ Metrics'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { postUserInfo, putUserInfo } from '../redux/action/userReg.action'
import DatePicker from 'react-native-date-picker'

export default function Profile({ navigation }) {
  const [id, setId] = useState()
  const [date, setDate] = useState(new Date())
  const [tDate, setTDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(true)
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [dob, setDob] = useState()
  const [agee, setAgee] = useState()
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.userReducer)
  // console.log(userInfo);
  
  const addData = () => {
    let data = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      dob: date,
      email: email,
    }
    dispatch(postUserInfo(data))
  }

  useEffect(() => {
    countAge()
    setId(userInfo.user.id)
    setFirstName(userInfo.user.firstName)
    setLastName(userInfo.user.lastName)
    setDob(userInfo.user.dob.getFullYear() + "/" + (userInfo.user.dob.getMonth() + 1) + "/" + userInfo.user.dob.getDate())
    setEmail(userInfo.user.email)
  }, [])

  const UpdateUser = () => {
    let upUser = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      dob: date,
      email: email,
    }
    dispatch(putUserInfo(upUser))
  }

  const countAge = () => {
    const birthDate = new Date(userInfo.user.dob.getFullYear() + "-" + (userInfo.user.dob.getMonth() + 1) + "-" + userInfo.user.dob.getDate()); // Replace with the actual birth date
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    setAgee(age);
    // console.log(age); // Output: 33 (if current year is 2023)
  }

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
      </View>
      <View style={styles.container2}>
        <View style={styles.box}>
          <Image style={styles.img} source={require('../../src/assets/image/Ellipse6.png')} />
          {/* <Text style={styles.text2}>John Doe</Text> */}
          <View style={styles.textinput}>
            <Text style={styles.text2}>First Name:</Text>
            <TextInput value={firstName} onChangeText={setFirstName} placeholder="John" style={styles.h1} placeholderTextColor="black" />
          </View>
          <View style={styles.textinput}>
            <Text style={styles.text2}>Last Name:</Text>
            <TextInput value={lastName} onChangeText={setLastName} placeholder="John" style={styles.h1} placeholderTextColor="black" />
          </View>
          <View style={styles.textinput}>
            <Text style={styles.text2}>E-Mail:</Text>
            <TextInput placeholder="John004@gmail.com" value={email} onChangeText={setEmail} style={styles.h1} placeholderTextColor="black" />
          </View>
          <View style={styles.textinput}>
            <Text style={styles.text2}>Date Of Birth:</Text>
            <TouchableOpacity onPress={() => setOpen(true)}>
              {/* <Text style={[styles.box]}>{show ? <Text style={styles.text}> DOB </Text> : <Text style={styles.boxtext1}>{date.toDateString()}</Text>}</Text> */}
              <Text style={styles.h2} onChangeText={setDob}>{dob}</Text>
            </TouchableOpacity>

            <DatePicker
              mode="date"
              modal
              open={open}
              date={date}
              maximumDate={tDate}
              onConfirm={(date) => {
                setOpen(false)
                setDate(date)
                setShow(false)
                setDob(date.toDateString())
                countAge()
              }}
              onCancel={() => {
                setOpen(false)
              }} />
          </View>

          <View style={styles.textinput}>
            <Text style={styles.text2}>Age:</Text>
            <Text style={styles.h2}>{agee}</Text>
          </View>

          <View style={styles.textinput}>
            <Text style={styles.text2}>Mobile Number:</Text>
            <TextInput placeholder="+91 99734-89210" style={styles.h1} placeholderTextColor="black" />
          </View>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.button} onPress={() => { UpdateUser(); countAge(); }}>
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
    borderRadius: 8,
    padding: horizontalScale(15) && verticalScale(20),
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
    marginTop: '3%',
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
  h2: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    marginTop: verticalScale(15),
    marginHorizontal: horizontalScale(5),
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