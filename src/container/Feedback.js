import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { postFeedback } from '../redux/action/feedback.action';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../redux/action/userReg.action';
export default function Feedback() {
    const dispatch = useDispatch()
    const userUid = useSelector(state => state.auth)
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Please enter your name'),
        mobileNumber: Yup.string()
            .matches(/^[0-9]{10}$/, 'Please enter a valid mobile number')
            .required('Please enter your mobile number'),
        review: Yup.string().required('Please enter your ride review'),
    });
    useEffect(() => {
        dispatch(getUserInfo())
    }, [])
    const showToast = () => {
        ToastAndroid.show('Your Feedback Submitted!', ToastAndroid.SHORT);
      }
    return (
        <Formik
            initialValues={{ name: '', mobileNumber: '', review: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {

                dispatch(postFeedback(
                    {
                        driverName: values.name,
                        driverPhoneNumber: values.mobileNumber,
                        review: values.review,
                        userId: userUid.user.uid,

                    }));
                resetForm();
                showToast();
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <>
                    <View style={styles.container}>
                        <Text style={styles.title}>Leave a ride review:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Driver Name"
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            placeholderTextColor={'#898989'}
                            value={values.name}
                        />
                        {errors.name && touched.name && (
                            <Text style={styles.errorText}>{errors.name}</Text>
                        )}
                        <TextInput
                            style={styles.input}
                            placeholder="Driver Mobile number"
                            onChangeText={handleChange('mobileNumber')}
                            onBlur={handleBlur('mobileNumber')}
                            value={values.mobileNumber}
                            keyboardType="phone-pad"
                            placeholderTextColor={'#898989'}
                            maxLength={10}
                        />
                        {errors.mobileNumber && touched.mobileNumber && (
                            <Text style={styles.errorText}>{errors.mobileNumber}</Text>
                        )}
                        <TextInput
                            style={[styles.input, { height: 120 }]}
                            placeholder="Ride review"
                            onChangeText={handleChange('review')}
                            onBlur={handleBlur('review')}
                            placeholderTextColor={'#898989'}
                            value={values.review}
                            multiline
                        />
                        {errors.review && touched.review && (
                            <Text style={styles.errorText}>{errors.review}</Text>
                        )}
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.buttonText}>Submit review</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </Formik>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        color: 'black'

    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 16,
        color: 'black',
        fontSize: 16,
        borderRadius: 10,
        borderWidth: 1,
    },
    button: {
        width: '100%',
        height: 48,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        backgroundColor: '#007AFF',
        color: 'black'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        color: 'black'

    },
    errorText: {
        color: 'red',
        marginTop: 8,
    },
});