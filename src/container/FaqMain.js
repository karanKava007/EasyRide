import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HelpList({navigation}) {
    return (
        <View style={styles.container}>
            {/* <View style={styles.subcontainer1}>
                <Text style={styles.sub1Text}>FAQ...</Text>
            </View> */}
            <View style={styles.subcontainer2}>
                <Text style={styles.HelpHeadText}>Help</Text>

                <TouchableOpacity style={styles.TouchSection} onPress={() => navigation.navigate('FAQD')}>
                    <Text style={styles.helpText}>Drivers do not respond</Text>
                    <AntDesign name='right' style={styles.arrowNav} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.TouchSection} onPress={() => navigation.navigate('FAQreview')}>
                    <Text style={styles.helpText}>How to leave a review for a drive</Text>
                    <AntDesign name='right' style={styles.arrowNav} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.TouchSection} onPress={() => navigation.navigate('FAQC')}>
                    <Text style={styles.helpText}>How to complain</Text>
                    <AntDesign name='right' style={styles.arrowNav} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.TouchSection} onPress={() => navigation.navigate('FAQbehind')}>
                    <Text style={styles.helpText}>How to find belongings I left behind</Text>
                    <AntDesign name='right' style={styles.arrowNav} />
                </TouchableOpacity>
            </View>
            <View style={styles.subcontainer3}>
                <Text style={styles.HelpHeadText}>Feedback</Text>
                <View style={styles.feedFlex}>
                    <TouchableOpacity style={[styles.feedSection]}>
                        <MaterialCommunityIcons name='android-messages' style={styles.IconNav} />
                        <Text style={styles.helpText}>Technical support chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.feedSection]}>
                        <MaterialCommunityIcons name='email' style={styles.IconNav} />
                        <Text style={styles.helpText}>Write to E-mail</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.TouchSection , styles.feedSection]}>
                        
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    // subcontainer1: {
    //     flex: 0,
    //     alignItems: 'center',
    //     textAlign: 'center'

    // },
    HelpHeadText: {
        fontSize: 22,
        color: 'black',
        backgroundColor: '#e6e6e6',
        paddingHorizontal: 18,
        paddingVertical: 20,
        fontWeight: 600,
        fontFamily: 'Poppins-Medium',

    },
    feedFlex:{
        flex:1,
    },
    feedSection:{
        flex:1,
        flexDirection:'row',
        paddingHorizontal: 15,
        paddingVertical: 0,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderWidth: 0,
        alignItems:'center',
    },
    subcontainer2: {
        flex: 2,
        backgroundColor: 'white'

    },
    subcontainer3: {
        flex: 2,
        backgroundColor: 'white'
    },
    sub1Text: {
        fontSize: 25,
        flexDirection: 'row',
        color: '#0D0F17',
        fontweight: 600,
        fontFamily: 'Poppins-SemiBold',
        fontWeight: "700",
        marginTop: 20,
        marginBottom:20, 
    },
    TouchSection: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderWidth: 0,

    },
    helpText: {
        color: '#000',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'Poppins-Medium'
    },
    arrowNav: {
        fontSize: 26,
        color: '#000',
        fontWeight:"900",
        fontStyle: 'bold',
        marginRight:10,
    },
    IconNav:{
        fontSize:26,
        fontWeight:"900",
        color:'#000',
        marginLeft:10,
        marginRight:20,
    }


})