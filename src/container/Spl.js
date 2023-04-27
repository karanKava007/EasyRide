import { View, Text, StyleSheet, TouchableOpacity , Image} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { horizontalScale, verticalScale } from '../helper/ Metrics';

export default function Spl({navigation}) {
    return (
        <LinearGradient colors={['#6487ff', '#0038ff']} style={styles.container}>
            <View style={styles.logoSection}>
            <Text style={styles.t1}>Easy<Text style={styles.t2}>Ride</Text></Text>
                <View>
                    <Text style={styles.t3}>SAVE FUEL, REDUCE TRAFFIC</Text>
                </View>
            </View>
            <View style={styles.buttonSection}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PhoneNumber')}>
                    <Text style={styles.btnText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    btnText:{
        color:'#194AF9',
        fontWeight:800,
    },
    logoSection:{
        backgroundColor:null,
        flex:3,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonSection:{
        flex:1,
        backgroundColor:null,
        justifyContent:'center',
    },
    button:{
        backgroundColor:'white',
        alignItems:'center',
        paddingVertical:horizontalScale(20),
        borderRadius:verticalScale(90) && horizontalScale(90),
        marginHorizontal:horizontalScale(25),
        marginTop:verticalScale(30),
    },
    t1:{
        fontFamily:'Poppins-Italic',
        fontSize:50,
        color:'white',
        marginTop:verticalScale(100),
    },
    t2:{
        fontFamily:'Poppins-BoldItalic'
    },
    t3:{
        fontFamily:'Poppins-Italic',
        color:'white',
        fontSize:14,
        marginVertical:verticalScale(-8)
    }
});