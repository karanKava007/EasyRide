import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Demo from '../container/Demo';
import Hello from '../container/Hello';
import { TabNav } from './TabNav';
import Dashbord from '../container/Dashbord';
import FAQbehind from '../container/FAQbehind';
import FaqMain from '../container/FaqMain';
import { StackNav } from './StackNav';
import Security from '../container/Security';
import CustomDrawer from '../component/CustomDrawer';
import DriverCustomDrawer from '../component/DriverCustomDrawer';
import Setting from '../container/Setting';
import Icon from 'react-native-vector-icons/MaterialIcons'
import DriverDashboard from '../container/DriverDashboard';

const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Dashbord1" component={Dashbord} options={{
        headerTransparent: true, title: 'Dashbord', headerTitle: '', drawerIcon: ({ focused, size }) => (
          <Icon name="dashboard" size={size} color={focused ? '#2482e3' : '#898989'} />
        ),
      }
      }
      />
      <Drawer.Screen name="Safety" component={Security} options={{
        headerTitle: 'Safety',headerTitleAlign:'center', headerTitleStyle:{fontFamily:'Poppins-SemiBold',fontSize:22,fontWeight:'600'},drawerIcon: ({ focused, size }) => (
          <Icon name="security" size={size} color={focused ? '#2482e3' : '#898989'} />
        ),
      }
      }
      />
      <Drawer.Screen name="FAQ" component={FaqMain} options={{
        headerTitleAlign: 'center',headerTitleStyle:{fontFamily:'Poppins-SemiBold',fontSize:22,fontWeight:'600'}, drawerIcon: ({ focused, size }) => (
          <Icon name="question-answer" size={size} color={focused ? '#2482e3' : '#898989'} />
        ),
      }
      }
      />
      <Drawer.Screen name="Settings" component={Setting} options={{
        headerTitleAlign: 'center', headerTitleStyle:{fontFamily:'Poppins-SemiBold',fontSize:22,fontWeight:'600'},drawerIcon: ({ focused, size }) => (
          <Icon name="settings" size={size} color={focused ? '#2482e3' : '#898989'} />
        ),
      }
      }
      />
    </Drawer.Navigator>
  )
}

const DriverNav = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DriverCustomDrawer {...props} />}>
      <Drawer.Screen name="DriverDashboard1" component={DriverDashboard} options={{
        headerTransparent: false ,title:'Passenger Request',headerTitleAlign:'center',headerTitleStyle:{fontFamily:'Poppins-SemiBold',fontWeight:'600'}}}/>
    </Drawer.Navigator>
  )
}
export { DrawerNav, DriverNav }