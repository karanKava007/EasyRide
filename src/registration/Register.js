import { View, Text, Button } from 'react-native'
import React from 'react'
import { object, string, number, date, InferType } from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { TextInput } from 'react-native-gesture-handler';

export default function Register() {

    let userSchema = object({
        name: string().required(),
        age: number().required().positive().integer(),
        email: string().required().email(),
    });
    return (
        <Formik
            validationSchema={userSchema}
            initialValues={{ name: '', email: '', age: '' }}
            onSubmit={values => console.log(values)}
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
                    <View>

                        <TextInput
                            onChangeText={handleChange('name')}
                            name='name'
                            placeholder='Name'
                        />
                        <Text>{errors.name != '' && touched.name ? errors.name : ''}</Text>
                        <TextInput
                            placeholder='Age'
                            onChangeText={handleChange('age')}
                            name='age'

                        />
                        <Text>{errors.age != '' && touched.age ? errors.age : ''}</Text>

                        <TextInput
                            onChangeText={handleChange('email')}
                            name='email'
                            placeholder='Email'
                        />
                        <Text>{errors.email != '' && touched.email ? errors.email : ''}</Text>

                        <Button
                            onPress={handleSubmit}
                            title="Press"
                        
                        />
                    </View>
                </>
            )}
        </Formik>

    )
}