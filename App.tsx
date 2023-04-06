import React from 'react';
import type { PropsWithChildren } from 'react';
import Hello from './src/container/Hello';
import { NavigationContainer } from '@react-navigation/native';
import { TabNav } from './src/routes/TabNav';
import 'react-native-gesture-handler';
import { DrawerNav } from './src/routes/DrawerNav';
import Spl from './src/container/Spl';
import Permisionocation from './src/container/Permisionocation';
import City from './src/container/CIty';
import PassDri from './src/container/PassDri';
import WelToEasyRide from './src/container/WelToRide';
import Dashbord from './src/container/Dashbord';
import PhoneNumber from './src/container/PhoneNumber';
import Otp from './src/container/Otp';
import Otp1 from './src/container/Otp1';
import FAQbehind from './src/container/FAQbehind';
import SplashNew from './src/component/SplashNew';
import { Provider } from 'react-redux';
import { configStore } from './src/redux/Store';
import Counter from './src/container/Counter';
import Post from './src/container/post/Post';
import Profile from './src/container/Profile';
import AvailDri from './src/container/AvailDri';
import Sample from './src/container/Sample';
import DriverRegistration from './src/container/DriverRegistration';
import Auth from './src/auth/Auth';
import { PersistGate } from 'redux-persist/integration/react'
import { AuthNav } from './src/routes/StackNav';
import Register from './src/registration/Register';

function App(): JSX.Element{
  const { store, persistor } = configStore();
  return (
    <>
      {/* <Spl/> */}
      {/* <PhoneNumber/> */}
      {/* <Otp/> */}
      {/* <Otp1/> */}
      {/* <Permisionocation/> */}
      {/* <City/> */}
      {/* <PassDri/> */}
      {/* <WelToEasyRide/> */}
      {/* <Dashbord/> */}
      {/* <FAQbehind/> */}
      {/* <DriverRegistration/> */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            {/* <StackNav /> */}
            {/* <AuthNav /> */}
            <Register/>
          </NavigationContainer>
        </PersistGate>
      </Provider>
      {/* <Auth/> */}
      {/* <AvailDri/> */}
      {/* <Sample/> */}
      {/* <Profile/> */}
      {/* <Provider store={store}> */}
      {/* <Counter/> */}
      {/* <Post/>  */}
      {/* </Provider> */}
    </>
  );
}
export default App;
