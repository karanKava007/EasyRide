import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { horizontalScale, verticalScale } from '../helper/ Metrics';
import { useDispatch, useSelector } from 'react-redux';
import { verifyOTP } from '../redux/action/auth.action';
import { ScrollView } from 'react-native-gesture-handler';
export default function Otp1({ navigation }) {
    const Phoneauth = useSelector(state => state.auth)
    const [code, setCode] = useState('');
    const dispatch = useDispatch();

    console.log('phoneData', Phoneauth);
    const handleOTP = () => {
        dispatch(verifyOTP(Phoneauth.confirm, code, navigation))
    }
    return (
        <KeyboardAvoidingView
            style={Styles.container1}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={Styles.container}>
                    <View style={Styles.v1}>
                        <Text style={Styles.t1}>Otp Verification</Text>
                    </View>
                    <View style={Styles.v2}>
                        <Text style={Styles.t2}>Enter the verification code we just send on phone number</Text>
                        <View style={Styles.v3}>
                            <TextInput maxLength={6} keyboardType='numeric' placeholder='OTP' placeholderTextColor={'#898989'} onChangeText={setCode} style={Styles.v4}></TextInput>
                        </View>
                        {
                            Phoneauth.error != '' ? <Text style={Styles.validation}>{Phoneauth.error}</Text> : ''
                        }
                        <View style={Styles.button}>
                            <TouchableOpacity style={Styles.btn} onPress={() => { handleOTP(); }}>
                                {/* navigation.navigate('Permisionocation'); */}
                                <Text style={Styles.btntxt}>Verify</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
const Styles = StyleSheet.create({
    container1:{
        flex:1,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: '6%',
    },
    v1: {
        flex: 1,
        // backgroundColor:'red',
        justifyContent: 'flex-end',
    },
    t1: {
        color: 'black',
        textAlign: 'center',
        fontSize: 22,
        fontFamily: 'Poppins-SemiBold',
        fontWeight: 600,
    },
    v2: {
        flex: 5,
        // backgroundColor:'green',
    },
    t2: {
        fontSize: 16,
        textAlign: 'center',
        // marginTop:'6%',
        marginTop: verticalScale(20),
        color: '#898989'
    },
    v3: {
        flexDirection: 'row',
        // backgroundColor:'red',
        alignContent: 'center',
        justifyContent: 'center',
        // height:'16%',
        height: verticalScale(100),
        // columnGap: 10,
        borderColor: 'black',
        // marginTop:'10%',
        marginTop: verticalScale(35),
    },
    button: {
        flex: 1,
        alignItems: 'center',
        // marginTop:'15%',
        marginTop: verticalScale(40),
    },
    btn: {
        backgroundColor: '#194AF9',
        height: verticalScale(55),
        paddingHorizontal: horizontalScale(120),
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btntxt: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 22,
        fontWeight: 600,
        justifyContent: 'center',
        color: 'white',
    },
    v4: {
        color: 'black',
        fontSize: 22,
        fontFamily: 'Poppins-SemiBold',
    },
    validation: {
        color: 'red',
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        marginLeft: 25,
        textAlign: 'center',
    },
})