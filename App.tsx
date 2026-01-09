import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from './src/contexts/ThemeContext'
import RootComponent from './src/RootComponent'

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <RootComponent />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
