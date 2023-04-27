import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { horizontalScale, verticalScale } from '../helper/ Metrics'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '../redux/action/userReg.action'

const CustomDrawer = (props) => {
    const userInfo = useSelector(state => state.userReducer);
    const authData = useSelector(state => state.auth);

    const dispatch = useDispatch()
    // console.log('gggggggggggggg', userInfo.user[0].image);
    // useEffect (()=>{
    //     dispatch(getUserInfo(authData.user.uid))
    // },[])
    return (
        <View style={styles.header}>
            <DrawerContentScrollView {...props}>
                <TouchableOpacity onPress={() => { props.navigation.navigate("Profile"); }}>
                    <View style={[styles.v1, styles.shadow]}>
                        <View style={styles.subProfileContainer}>
                            <Image source={{uri:`${userInfo.user[0].image}`}} style={{ height: '100%', width: '100%' }}/>
                        </View>
                        <Text style={styles.text}>{userInfo.user[0].firstName+" "+userInfo.user[0].lastName}</Text>
                    </View>
                </TouchableOpacity>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('DriverRegistration')}>
                <Text style={styles.btnText}>Driver Mode</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        marginTop: '-1%',
    },
    v1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '6%',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        // shadowOpacity:  0.4,
        // shadowRadius: 3,
        elevation: 10,
    },
    img: {
        marginTop: verticalScale(20),
        height: '100%', 
        width: '100%',
    },
    text: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        marginTop: verticalScale(15),
        marginBottom: verticalScale(20),
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: horizontalScale(15),
        marginHorizontal: horizontalScale(20),
        // paddingHorizontal:horizontalScale(40),
        marginBottom: '20%',
        borderRadius: 90,
    },
    btnText: {
        fontSize: 22,
        fontWeight: 600,
        color: 'white',
    },
    subProfileContainer: {
        width: 110,
        height: 110,
        borderRadius: 300,
        backgroundColor: '#ccc',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ccc',
        marginTop:verticalScale(10),
    },
})
export default CustomDrawer