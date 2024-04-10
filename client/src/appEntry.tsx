import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Navigation from './components/elements/Navigation/Navigation'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NativeBaseProvider>
          <Navigation />
          <StatusBar style="light" />
        </NativeBaseProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}
registerRootComponent(App)
