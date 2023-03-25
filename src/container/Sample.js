import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale } from '../helper/ Metrics'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Start() {
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer1}>
                <Text style={styles.sub1Text}>Available Driver</Text>
            </View>
            <View style={styles.subcontainer2}>
                <View style={styles.driverFlex}>
                    <View style={styles.tabcon1}>
                        <View style={styles.profile}>
                            <Image style={styles.img} source={require('../../src/assets/image/Ellipse6.png')} />
                        </View>
                        <View style={styles.Bio}>
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
                    </View>
                    <View style={styles.tabcon2}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.txt1}>Deny</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.txt2}>Accept</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            <View style={styles.subcontainer3}>
                <Text style={styles.sub1Text}>Available Driver.....</Text>
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
    subcontainer1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green'

    },
    sub1Text: {
        fontSize: 25,
        flexDirection: 'row',
        color: '#0D0F17',
        fontweight: 600,
        fontFamily: 'Poppins-SemiBold',
        fontWeight: 700,
    },
    subcontainer2: {
        flex: 2.5,
        // backgroundColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white',
        // height: verticalScale(190),
        width: horizontalScale(330),
        marginTop: '5%',
        borderRadius: 10,
        flexDirection: 'row',
        // marginBottom: verticalScale(-55)
    },
    subcontainer3: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'pink',
    },
    tabcon1: {
        flex: 5,
        flexDirection: 'row',
        // borderWidth: 1,
        // backgroundColor: 'green',

    },
    tabcon2: {
        flex: 2,
        // borderWidth: 1,
        backgroundColor: 'red',
        
    },
    driverFlex: {
        flex: 1,
        // backgroundColor: 'red',
    },
    Bio: {
        flex: 5,
        backgroundColor: 'skyblue',
        marginTop: verticalScale(5)

    },
    profile: {
        flex: 1.6,
        // backgroundColor: 'black',
        alignItems: 'center',
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: horizontalScale(70),
        height: verticalScale(75),
        borderRadius: 50,
        marginTop: verticalScale(6),
        marginLeft: horizontalScale(7),
    },
    txt: {
        color: '#898989',
        marginLeft: horizontalScale(14),
        fontFamily: 'Poppins-SemiBold',
        marginTop: verticalScale(7)
    },
    txt3: {
        color: 'black',
    },
    container2: {
        flexDirection: 'row',
    },
})