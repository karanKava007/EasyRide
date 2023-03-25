import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'
import { horizontalScale, verticalScale } from '../helper/ Metrics'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CustomDrawer = (props) => {
  return (
    <View style={styles.header}>
    <DrawerContentScrollView {...props}>
        <TouchableOpacity onPress={() => {props.navigation.navigate("Profile");}}>
        <View style={[styles.v1,styles.shadow]}>
            <Image source={require('../../src/assets/image/Ellipse6.png')} style={styles.img}/>
            <Text style={styles.text}>Willum Jain</Text>
        </View>
        </TouchableOpacity>
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
        <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('DriverRegistration')}>
            <Text style={styles.btnText}>Driver Mode</Text>
         </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        flex:1,
        marginTop:'-1%',
    },
    v1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'6%',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        // shadowOpacity:  0.4,
        // shadowRadius: 3,
        elevation: 10,
    },
    img:{
        marginTop:verticalScale(20),
    },
    text:{
        color:'black',
        fontSize:14,
        fontFamily: 'Poppins-SemiBold',
        marginTop:verticalScale(15),
        marginBottom:verticalScale(20),
    },
    btn:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue',
        padding:horizontalScale(15),
        marginHorizontal:horizontalScale(20),
        // paddingHorizontal:horizontalScale(40),
        marginBottom:'20%',
        borderRadius:90,
    },
    btnText:{
        fontSize:22,
        fontWeight:600,
        color:'white',
    },
})
export default CustomDrawer