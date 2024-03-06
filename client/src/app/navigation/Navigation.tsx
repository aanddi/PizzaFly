import { AntDesign } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { FC } from 'react'

import { routes } from './routes'

const Tab = createBottomTabNavigator()

const screenNavigator = {
  tabBarShowLabel: true,
  tabBarStyle: {
    paddingBottom: 3,
    backgroundColor: 'white',
  },
  tabBarActiveTintColor: 'orange',
  tabBarInactiveTintColor: 'grey',
}

const NavigationBottom: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenNavigator}>
        {routes.map(route => {
          return (
            <Tab.Screen
              name={route.name}
              component={route.component}
              options={{
                tabBarIcon: ({ focused }) => {
                  return <AntDesign name={route.icon} size={25} color={focused ? 'orange' : 'grey'} />
                },

                headerTitleAlign: 'center',
               
              }}
            />
          )
        })}
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default NavigationBottom
