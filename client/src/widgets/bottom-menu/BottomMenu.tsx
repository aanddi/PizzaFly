import { AntDesign } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FC } from 'react'

import { menuData } from './menu.data'

const Tab = createBottomTabNavigator()

const screenNavigator = {
  tabBarShowLabel: true,
  tabBarStyle: {
    paddingBottom: 3
    // backgroundColor: '#000'
  },
  // headerStyle: {
  //   backgroundColor: '#000',
  // },
  // headerTintColor: '#fff',
  tabBarActiveTintColor: 'orange',
  tabBarInactiveTintColor: 'grey'
}

const BottomMenu: FC = () => {
  return (
    <Tab.Navigator screenOptions={screenNavigator}>
      {menuData.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{
              tabBarIcon: ({ focused }) => {
                return <AntDesign name={item.icon} size={25} color={focused ? 'orange' : 'grey'} />
              },
              // tabBarBadge: 3,
              headerTitleAlign: 'center'
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

export default BottomMenu
