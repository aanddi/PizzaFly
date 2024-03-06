import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Navigation from './navigation/Navigation'

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar style="light" />
    </SafeAreaProvider>
  )
}
registerRootComponent(App)
