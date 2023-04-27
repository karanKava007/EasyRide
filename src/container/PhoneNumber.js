import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Flag from 'react-native-flags';
import { horizontalScale, verticalScale } from '../helper/ Metrics';
import { useDispatch } from 'react-redux';
import { ConfirmPhoneAuth } from '../redux/action/auth.action';
import { object, string, number, date, InferType } from 'yup';
import { Form, Formik, useFormik } from 'formik';

// import  Icon  from '@iconify/react';

export default function PhoneNumber({ navigation }) {
    const dispatch = useDispatch()

    const phoneRegExp = /^[0-9]{10}$/;
    let userSchema = object({
        phoneNo: string()
            .required("required")
            .matches(phoneRegExp, "Invalid Number!!")
    });

    // <Text>{navigation}</Text>
    return (
        <Formik
            validationSchema={userSchema}
            initialValues={{ phoneNo: '' }}
            onSubmit={values => { dispatch(ConfirmPhoneAuth(values.phoneNo)); navigation.navigate('Otp1'); }}
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
                touched,
            }) => (
                <>
                    <View style={styles.container}>
                        <View style={styles.heading}>
                            <Text style={styles.title}>Join Us Via Phone Number</Text>
                        </View>
                        <View style={styles.information}>
                            <View style={styles.icon}>
                                <Flag code="IN" size={32} style={styles.flag} />
                                {/* <Icon name="twemoji:flag-india" size={22}/> */}
                                <Icon style={styles.createdown} name="caret-down" size={22} />
                                <Text style={styles.number}>+91</Text>
                                <TextInput style={styles.input} maxLength={20} name='phoneNo' keyboardType='phone-pad' placeholder="Enter Your Phone Number" onChangeText={handleChange('phoneNo')} placeholderTextColor="#989898" />
                            </View>
                            <View style={styles.btn}>
                                <Text style={styles.validation}>{errors.phoneNo != '' && touched.phoneNo ? errors.phoneNo : ''}</Text>
                                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                    <Text style={styles.btntxt}>Next</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.Termcondition}>
                            <Text style={styles.condition}>By tapping "Next" you agree to Terms and Conditions and Privacy Policy</Text>
                        </View>
                    </View >
                </>
            )
            }
        </Formik >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: verticalScale(25) && horizontalScale(25)
    },
    heading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        paddingBottom: verticalScale(50) && horizontalScale(50),
    },
    title: {
        fontSize: 22,
        color: '#000',
        fontWeight: '600',
    },
    information: {
        flex: 5,
        width: '100%',
        height: '100%',
        rowGap: 30
    },
    icon: {
        width: '100%',
        flexDirection: 'row',
        columnGap: 2,
        textAlign: 'center',
        justifyContent: 'center',
        justifyContent: 'space-evenly',
    },
    createdown: {
        marginTop: verticalScale(14) && horizontalScale(14),
        color: 'black',
    },
    flag: {
        marginTop: verticalScale(10) && horizontalScale(10),
    },
    number: {
        marginTop: verticalScale(16) && horizontalScale(15),
        color: '#000',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#B6B6B6',
        color: 'black',
        width: '70%',
        paddingBottom: 2,
        fontSize: 15,
    },
    btn: {
        flex: 3,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#194AF9',
        width: verticalScale(290) && horizontalScale(290),
        height: horizontalScale(55) && verticalScale(55),
        borderRadius: verticalScale(30) && horizontalScale(30),
        justifyContent: 'center',
        alignItems: 'center',
    },
    btntxt: {
        color: '#FFF',
        fontWeight: '600',
        fontSize: 19,
        fontFamily: 'Poppins-SemiBold',
    },
    Termcondition: {
        width: '100%',
        // flex: 1,
        // justifyContent: 'flex-end',
        alignItems: 'center',
        marginVertical:verticalScale(-15),
    },
    condition: {
        width: '100%',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '400',
        color: '#898989',
    },
    validation: {
        color: 'red',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        marginTop:verticalScale(-25)
    },

})

