import React from 'react'
import { DefaultTheme, DarkTheme } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider, useTheme } from './src/contexts/ThemeContext'
import RootComponent from './src/RootComponent'

function AppContent() {
  const { isDark } = useTheme()

  const globalTheme = isDark
    ? {
        ...DarkTheme,
        colors: {
          ...DarkTheme.colors,
          background: '#131314',
          card: '#1e1f20',
          text: '#ffffff',
          border: '#2a2b2c',
        },
        dark: true,
      }
    : {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#ffffff',
          card: '#f5f5f5',
          text: '#000000',
          border: '#e5e5e5',
        },
        dark: false,
      }

  return <RootComponent globalTheme={globalTheme} isDark={isDark} />
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
