import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { color } from 'react-native-reanimated'
import Flag from 'react-native-flags';

export default function PhoneNumber() {
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.title}>Join Us Via Phone Number</Text>
            </View>
            <View style={styles.information}>
                <View style={styles.icon}>
                <Flag code="IN" size={32} style={styles.flag}/>
                    {/* <Icon name="flag-sharp" size={40} color="#000" /> */}
                    <Icon style={styles.createdown} name="caret-down" size={22} />
                    <Text style={styles.number}>+91</Text>
                    <TextInput style={styles.input} placeholder="Enter your phone number">
                    </TextInput>
                </View>
            </View>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.button} onPress={this.onPress}>
                    <Text style={styles.btntxt}>Next</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Termcondition}>
                <Text style={styles.condition}>By tapping "Next" you agree to Terms and Conditions and Privacy Policy</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        flex: 1,
        backgroundColor:'white',
        alignItems: 'center',
        padding: '3%',
    },
    heading: {
        flex: 3,
        width: '100%',
        justifyContent: 'flex-end',
        // backgroundColor: 'green',

    },
    title: {
        width: '100%',
        // backgroundColor: 'lightgreen',
        textAlign: 'center',
        color: '#000',
        fontWeight: '600',
        fontSize: 22,
        paddingBottom: '13%',
    },
    information: {
        flex: 1,
        width: '100%',
        // backgroundColor: 'yellow',
    },
    icon: {
        width: '100%',
        color:'black',
        flexDirection: 'row',
    },
    flag:{
        
    },
    input: {
        borderBottomWidth:1,
        // borderColor: '#B6B6B6',
        color:'black',
    },
    createdown: {
        marginTop: '2.7%',
        marginHorizontal: 5,
        color:'black',
    },
    number: {
        marginTop: '4%',
        color:'black',
    },
    btn: {
        justifyContent: 'flex-end',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        paddingTop:'5%',
    },
    button: {
        backgroundColor: '#194AF9',
        width: '80%',
        height: '65%',
        paddingTop: '2.8%',
        borderRadius: 30,
    },
    btntxt: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '600',
        fontSize: 19
    },
    Termcondition: {
        // backgroundColor: 'lightpink',
        width: '100%',
        flex: 5,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    condition:{
        width:'100%',
        textAlign:'center',
        fontSize:12,
        fontWeight:'400',
        paddingBottom:'6%',
        color:'#898989',
    },

})