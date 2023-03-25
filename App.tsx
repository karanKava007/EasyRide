import React from 'react';
import type {PropsWithChildren} from 'react';
import Hello from './src/container/Hello';
import { NavigationContainer } from '@react-navigation/native';
import { StackNav } from './src/routes/StackNav';
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

function App(): JSX.Element{
  const store = configStore();
  return(
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
     <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
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
