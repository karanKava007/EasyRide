import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Form, Formik, useFormik } from 'formik';
import { number, object, string } from 'yup';

export default function Register() {
    let regSchema = object({
        name: string().required(),
        age: number().required().positive().integer(),
        email: string().email()
    });
    const formikObj = useFormik({
        initialValues: {
            name: '',
            age: '',
            email: '',
        },
        validationSchema: regSchema,
        onSubmit: values => {
            console.log(values);
        },
    });
    const { handleSubmit, handleChange, handleBlur, values, errors } = formikObj;
    return (
        <Formik values={formikObj}>
            <Form onSubmit={handleSubmit}>
                <View>
                    <Text style={{ fontFamily: 'cursive' }}>Registration</Text>
                    <TextInput placeholder='Name' onChangeText={handleChange}  name='name'/>
                    <TextInput placeholder='Age' onChangeText={handleChange}  name='age'/>
                    <TextInput placeholder='Email' onChangeText={handleChange} name='email' />
                </View>
            </Form>
        </Formik>
    )
}