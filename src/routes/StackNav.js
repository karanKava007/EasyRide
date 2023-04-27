import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Demo from '../container/Demo';
import Hello from '../container/Hello';
import Spl from '../container/Spl';
import PhoneNumber from '../container/PhoneNumber';
import Otp1 from '../container/Otp1';
import Permisionocation from '../container/Permisionocation';
import City from '../container/CIty';
import PassDri from '../container/PassDri';
import WelToEasyRide from '../container/WelToRide';
import Dashbord from '../container/Dashbord';
import FAQbehind from '../container/FAQbehind';
import { DrawerNav, DriverNav } from './DrawerNav';
import FAQD from '../container/FAQD';
import FAQC from '../container/FAQC';
import FAQreview from '../container/FAQreview';
import Profile from '../container/Profile';
import AvailDri from '../container/AvailDri';
import DriverRegistration from '../container/DriverRegistration';
import DriverDashboard from '../container/DriverDashboard';
import DriverProfile from '../container/DriverProfile';
import { useSelector } from 'react-redux';


const Stack = createNativeStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen name="Spl1" component={Spl} options={{ headerShown: false, statusBarColor: '#6487ff' }} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumber} options={{ title: '' }} />
      <Stack.Screen name="Otp1" component={Otp1} options={{ title: '' }} />
      <Stack.Screen name="City" component={City} options={{ title: '' }} />
      <Stack.Screen name="PassDri" component={PassDri} options={{ title: '' }} />


      <Stack.Screen name="WelToRide" component={WelToEasyRide} options={{ title: '' }} />
      <Stack.Screen name="Dashbord" component={DrawerNav} options={{ headerShown: false }} />
      <Stack.Screen name="FAQD" component={FAQD} options={{ title: 'FAQ', headerTitleAlign: 'center', headerTitleStyle: { fontFamily: 'Poppins-SemiBold', fontSize: 22, fontWeight: '600' } }} />
      <Stack.Screen name="FAQC" component={FAQC} options={{ title: 'FAQ', headerTitleAlign: 'center', headerTitleStyle: { fontFamily: 'Poppins-SemiBold', fontSize: 22, fontWeight: '600' } }} />
      <Stack.Screen name="FAQreview" component={FAQreview} options={{ title: 'FAQ', headerTitleAlign: 'center', headerTitleStyle: { fontFamily: 'Poppins-SemiBold', fontSize: 22, fontWeight: '600' } }} />
      <Stack.Screen name="FAQbehind" component={FAQbehind} options={{ title: 'FAQ', headerTitleAlign: 'center', headerTitleStyle: { fontFamily: 'Poppins-SemiBold', fontSize: 22, fontWeight: '600' } }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerTransparent: true, headerTintColor: 'white', headerTitleStyle: { fontSize: 25, fontFamily: 'Poppins-Medium' } }} />
      <Stack.Screen name="AvailDri" component={AvailDri} options={{ title: 'Available Driver', headerTitleAlign: 'center', headerTitleStyle: { fontFamily: 'Poppins-SemiBold', fontSize: 22, fontWeight: '600' } }} />


      <Stack.Screen name="DriverRegistration" component={DriverRegistration} options={{ title: 'Driver Information', headerTitleAlign: 'center', headerTitleStyle: { fontFamily: 'Poppins-SemiBold', fontSize: 22, fontWeight: '600' } }} />
      <Stack.Screen name="DriverDashboard" component={DriverNav} options={{ headerShown: false }} />
      <Stack.Screen name="DriverProfile" component={DriverProfile} options={{ title: 'Driver Profile', headerTintColor: 'black', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 25, fontFamily: 'Poppins-Medium' } }} />
    </Stack.Navigator>
  )
}


const Passenger = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen name="Dashbord" component={DrawerNav} options={{ headerShown: false }} />
      <Stack.Screen name="FAQD" component={FAQD} options={{ title: 'FAQ', headerTitleAlign: 'center', headerTitleStyle: { fontFamily: 'Poppins-SemiBold', fontSize: 22, fontWeight: '600' } }} />
      <Stack.Screen name="FAQC" component={FAQC} options={{ title: 'FAQ', headerTitleAlign: 'center', headerTitleStyle: { fontFamily: 'Poppins-SemiBold', fontSize: 22, fontWeight: '600' } }} />
      <Stack.Screen name="FAQreview" component={FAQreview} options={{ title: 'FAQ', headerTitleAlign: 'center', headerTitleStyle: { fontFamily: 'Poppins-SemiBold', fontSize: 22, fontWeight: '600' } }} />
      <Stack.Screen name="FAQbehind" component={FAQbehind} options={{ title: 'FAQ', headerTitleAlign: 'center', headerTitleStyle: { fontFamily: 'Poppins-SemiBold', fontSize: 22, fontWeight: '600' } }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerTransparent: true, headerTintColor: 'white', headerTitleStyle: { fontSize: 25, fontFamily: 'Poppins-Medium' } }} />
      <Stack.Screen name="AvailDri" component={AvailDri} options={{ title: 'Available Driver', headerTitleAlign: 'center', headerTitleStyle: { fontFamily: 'Poppins-SemiBold', fontSize: 22, fontWeight: '600' } }} />
    </Stack.Navigator>
  )

}
const Driver = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen name="DriverDashboard" component={DriverNav} options={{ headerShown: false }} />
      <Stack.Screen name="DriverProfile" component={DriverProfile} options={{ title: 'Driver Profile', headerTintColor: 'black', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 25, fontFamily: 'Poppins-Medium' } }} />
    </Stack.Navigator>
  )
}

const Register = () => {
  console.log("kkkk");
  return (
    <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen name="City" component={City} options={{ title: '' }} />
      <Stack.Screen name="PassDri" component={PassDri} options={{ title: '' }} />
      <Stack.Screen name="WelToRide" component={WelToEasyRide} options={{ title: '' }} />
      <Stack.Screen name="DriverRegistration" component={DriverRegistration} options={{ title: 'Driver Information', headerTitleAlign: 'center', headerTitleStyle: { fontFamily: 'Poppins-SemiBold', fontSize: 22, fontWeight: '600' } }} />
    </Stack.Navigator>
  )
}

const Test2 = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen name="Spl" component={Spl} options={{ headerShown: false, statusBarColor: '#6487ff' }} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumber} options={{ title: '' }} />
      <Stack.Screen name="Otp1" component={Otp1} options={{ title: '' }} />
    </Stack.Navigator>
  )
}

const AuthNav = () => {
  const savedUserData = useSelector(state => state.auth)
  const userData = useSelector(state => state.userReducer)
  const driverData = useSelector(state => state.DivReducer)
  // const arr = [userData.user]
  // console.log('rrrrrrrrrrrr',arr);
  // console.log(userData.user[0].userType);

  // console.log("11111111111111", userData.user );
  // console.log("2222222222222", driverData.driver);
  // console.log("333333333333", driverData.driver.userid);
  // console.log(userData.user[0].userType == 'user');

  // console.log('Saved Data',savedUserData.user.uid == item.uid  item.userType == 'user' );
  // console.log(driverData.driver[0].userType === 'driver');

  //------------------------------------------------------------//

  if (savedUserData.user === null) {
    return (console.log('Null User '),
      <Test2 />
    )
  }
  else if (userData.user.length == 0 && driverData.driver.length == 0) {
    return (
      <Register />
    )
  } else if (userData.user.length > 0) {
    console.log('passengerrrrrrrrr');
    return (console.log('Passanger'),
      <Passenger />
    )
  } else if (driverData.driver.length > 0) {
    console.log('Driverrrrrrrrrrrrr');

    // console.log('vkvkvkvkvkvkvkvkvkvkkvkvkvvk',driverData.driver[0]);
      return (
        <Driver />
      )
  }else{
    console.log('undefineddddddd');
  }
}
export { AuthNav, StackNav }