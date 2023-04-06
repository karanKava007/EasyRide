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


// const StackNav = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
//       <Stack.Screen name="Spl" component={Spl} options={{ headerShown: false,statusBarColor:'#6487ff' }} />
//       <Stack.Screen name="PhoneNumber" component={PhoneNumber} options={{title:''}} />
//       <Stack.Screen name="Otp1" component={Otp1} options={{title:''}} />
//       <Stack.Screen name="Permisionocation" component={Permisionocation} options={{title:''}} />
//       <Stack.Screen name="City" component={City} options={{title:''}} />
//       <Stack.Screen name="PassDri" component={PassDri} options={{title:''}} />
//       <Stack.Screen name="WelToRide" component={WelToEasyRide} options={{title:''}} />
//       <Stack.Screen name="Dashbord" component={DrawerNav} options={{ headerShown: false }}/>


//       <Stack.Screen name="FAQD" component={FAQD} options={{title:'FAQ',headerTitleAlign:'center',headerTitleStyle:{fontFamily:'Poppins-SemiBold',fontSize:22,fontWeight:'600'}}} />
//       <Stack.Screen name="FAQC" component={FAQC} options={{title:'FAQ',headerTitleAlign:'center',headerTitleStyle:{fontFamily:'Poppins-SemiBold',fontSize:22,fontWeight:'600'}}} />
//       <Stack.Screen name="FAQreview" component={FAQreview} options={{title:'FAQ',headerTitleAlign:'center',headerTitleStyle:{fontFamily:'Poppins-SemiBold',fontSize:22,fontWeight:'600'}}} />
//       <Stack.Screen name="FAQbehind" component={FAQbehind} options={{title:'FAQ',headerTitleAlign:'center',headerTitleStyle:{fontFamily:'Poppins-SemiBold',fontSize:22,fontWeight:'600'}}} />

//       <Stack.Screen name="Profile" component={Profile} options={{headerTransparent: true,headerTintColor:'white',headerTitleStyle:{fontSize:25,fontFamily:'Poppins-Medium'}}} />
//       <Stack.Screen name="AvailDri" component={AvailDri} options={{title:'Available Driver' , headerTitleAlign:'center',headerTitleStyle:{fontFamily:'Poppins-SemiBold',fontSize:22,fontWeight:'600'}}} />

//       <Stack.Screen name="DriverRegistration" component={DriverRegistration} options={{title:'Driver Information', headerTitleAlign:'center',headerTitleStyle:{fontFamily:'Poppins-SemiBold',fontSize:22,fontWeight:'600'}}} />

//       <Stack.Screen name="DriverDashboard" component={DriverNav} options={{headerShown:false}} />
//       <Stack.Screen name="DriverProfile" component={DriverProfile} options={{title:'Driver Profile',headerTintColor:'black',headerTitleAlign:'center',headerTitleStyle:{fontSize:25,fontFamily:'Poppins-Medium'}}} />
//     </Stack.Navigator>
//   )
// }

const Test1 = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
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

const Test2 = () => {
  console.log('Test2');
  return (
    <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen name="Spl" component={Spl} options={{ headerShown: false, statusBarColor: '#6487ff' }} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumber} options={{ title: '' }} />
      <Stack.Screen name="Otp1" component={Otp1} options={{ title: '' }} />
      <Stack.Screen name="Permisionocation" component={Permisionocation} options={{ title: '' }} />
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

const AuthNav = () => {
  const savedUserData = useSelector(state => state.auth)
  console.log('Saved Data', savedUserData);
  if (savedUserData.user === null) {
    return (console.log('spl test 2 '),
      <Test2 />
    )
  } else if (savedUserData.user !== null) {
    return (console.log('abcd'),
      <Test1 />
    )
  }
}
export { AuthNav, Test1, Test2 }