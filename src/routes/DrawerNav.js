import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Demo from '../container/Demo';
import Hello from '../container/Hello';
import { TabNav } from './TabNav';


const Drawer = createDrawerNavigator();


const DrawerNav=()=>{
    return(
<Drawer.Navigator>
      <Drawer.Screen name="Demo" component={TabNav} />
      <Drawer.Screen name="Hello" component={Demo} />
    </Drawer.Navigator>

    )
}

export{DrawerNav}