import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'

import SuccessfulOrder from '@/components/pages/SuccessfulOrder/SuccessfulOrder'

import BottomMenu from '../BottomMenu/BottomMenu'

import { routes } from './routes'

const Stack = createNativeStackNavigator()

const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomMenu">
        <Stack.Screen name="BottomMenu" component={BottomMenu} options={{ headerShown: false }} />
        {routes.map((route, index) => {
          return <Stack.Screen key={index} name={route.name} component={route.component} />
        })}
        <Stack.Screen name="SuccessfulOrder" component={SuccessfulOrder} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
