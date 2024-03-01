import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View>
      <Text className='text-center text-lg'>PizzaFly</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  )
}

registerRootComponent(App)
