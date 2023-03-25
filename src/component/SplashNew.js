import { View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { horizontalScale, verticalScale } from '../helper/ Metrics';
import React, {useRef, useEffect} from 'react';

const FadeInView = props => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  
    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true,
      }).start();
    }, [fadeAnim]);
  
    return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim, // Bind opacity to animated value
        }}>
        {props.children}
      </Animated.View>
    );
  };

export default function SplashNew({}) {
    return (
  

  <FadeInView>

        // <LinearGradient colors={['#ACBDFA', '#194AF9']} style={styles.container}>
        <LinearGradient colors={['#6487ff', '#0038ff']} style={styles.container}>
            <View style={styles.logoSection}>
            {/* <Image source={require('../assets/image/logo.png')} /> */}
            <Text style={styles.t1}>Easy<Text style={styles.t2}>Ride</Text></Text>
                <View>
                    <Text style={styles.t3}>SAVE FUEL, REDUCE TRAFFIC</Text>
                </View>
            </View>
  </FadeInView>
            {/* Button Section */}
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
        // paddingHorizontal:30,
        paddingVertical:horizontalScale(20),
        borderRadius:90,
        marginHorizontal:horizontalScale(25),
        marginTop:verticalScale(30),
    },
    t1:{
        fontFamily:'Poppins-Italic',
        fontSize:50,
        color:'white',
        // marginTop:'35%',
        marginTop:verticalScale(100),
    },
    t2:{
        fontFamily:'Poppins-BoldItalic'
    },
    t3:{
        fontFamily:'Poppins-Italic',
        color:'white',
        fontSize:14,
        marginVertical:'-2%'
    }
});







