import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../redux/action/auth.action';
import { StackActions, useNavigation } from '@react-navigation/native';

export default function Setting({ navigation }) {
    const dispatch = useDispatch()
    const userInfo = useSelector(state => state.userReducer)
    const handleLogOut = () => {
        navigation.navigate('Spl')
        dispatch(logOutUser())
    }
    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                {/* <Text style={styles.text}>Setting</Text> */}
            </View>
            <View style={styles.View2}>

                <TouchableOpacity>
                    <AntDesign style={styles.icon} name='right' />
                    <View>
                        <Text style={styles.text1}>Phone Number</Text>
                        <Text style={styles.textt}>9875100797</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <AntDesign style={styles.icon1} name='right' />
                    <View>
                        <Text style={[styles.text1, styles.text11]}>Language</Text>
                        <Text style={styles.textt}>English</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { Linking.openURL('https://quickride.in/taxidriver/terms.html') }}>
                    <AntDesign style={styles.icon2} name='right' />
                    <Text style={styles.condition}>Terms & Conditions</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.view3}>
                <TouchableOpacity onPress={() => {handleLogOut();}}>
                    <Text style={styles.text3}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        color: 'black'
    },
    View1: {
        // backgroundColor:'green'
    },
    text: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 700,
        marginTop: 33,
        color: '#0D0F17'
    },
    View2: {
        paddingTop: 30,
        flex: 2,
        paddingLeft: 20,

        // backgroundColor:'red'
    },

    text1: {
        color: 'black',
        fontSize: 16,
    },
    text11: {
        paddingTop: 20
    },
    view3: {
        // marginTop:,
        flex: 4,
        paddingLeft: 20,

    },
    text3: {
        color: 'blue',
        fontSize: 18
    },
    icon: {
        position: 'absolute',
        color: 'black',
        top: 0,
        right: 20,
        fontSize: 20
    },
    icon1: {
        position: 'absolute',
        color: 'black',
        top: 25,
        right: 20,
        fontSize: 20
    },
    icon2: {
        position: 'absolute',
        color: 'black',
        top: 18,
        right: 20,
        fontSize: 20
    },
    textt: {
        paddingTop: 5,
        paddingBottom: 15,
        borderBottomWidth: 0.2,
        color: '#B6B6B6',
    },
    condition: {
        color: 'black',
        fontSize: 16,
        paddingTop: 20,
        borderBottomWidth: 0.5,
        paddingBottom: 20
    }


})