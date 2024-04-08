import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Navigation from './components/elements/Navigation/Navigation'

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar style="light" />
    </SafeAreaProvider>
  )
}
registerRootComponent(App)
