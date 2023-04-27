import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { horizontalScale, verticalScale } from '../../helper/ Metrics';
import { useSelector } from 'react-redux';


export default function AvaiDri() {
    return (
        <View style={styles.container}>
            <View style={[styles.card, styles.shadowProp]}>

                <View style={styles.profile}>


                    <View style={styles.img}>
                        <Image style={styles.img} source={require('../../assets/image/Ellipse6.png')} />
                    </View>

                    <View style={styles.detail}>
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
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.txt1}>Deny</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2}>
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
    shadowProp: {
        elevation: 10,
    },
    card: {
        backgroundColor: 'white',
        height: verticalScale(190),
        width: horizontalScale(330),
        marginTop: '5%',
        borderRadius: 10,
        flexDirection: 'column',
        overflow: 'hidden',
    },
    profile: {
        flex: 4,
        flexDirection: 'row',
    },
    img: {
        width: horizontalScale(66),
        height: verticalScale(72),
        borderRadius: 50,
        margin: "2%",
        overflow: 'hidden',
    },
    img1: {
        width: "100%",
        height: "100%",
    },
    detail: {
        width: horizontalScale(200),
        marginTop: verticalScale(5)
    },
    txt: {
        color: '#898989',
        marginLeft: horizontalScale(12),
        fontFamily: 'Poppins-Light',
        marginTop: verticalScale(8)
    },
    txt3: {
        color: 'black',
    },
    container2: {
        flexDirection: 'row',
    },

    btn: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        width: horizontalScale(330),
        borderTopColor: '#898989',
        borderTopWidth: 1,
    },
    button1: {
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
        width: "50%",
        borderRightWidth: 1,
        borderRightColor: '#898989'
    },
    button2: {
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
        width: "50%",
        borderLeftWidth:0.1,
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
    container2: {
        flexDirection: 'row',
    },
});  