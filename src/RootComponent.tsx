import '../global.css'

import { SafeAreaView } from 'react-native-safe-area-context'
import { useMemo } from 'react'
import { TTabScreen } from './types/tab.types'
import HomeScreen from './screens/HomeScreen'
import StatsScreen from './screens/StatsScreen'
import SettingsScreen from './screens/SettingsScreen'
import BotttomNavigation from './components/BottomNavigation'
import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import { themeColors } from './utils/themeColors'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { useThemeContext } from './contexts/ThemeContext'

export default function RootComponent() {
  const { isDark } = useThemeContext()

  const tabs = useMemo<TTabScreen[]>(
    () => [
      { name: 'Home', component: HomeScreen },
      { name: 'Stats', component: StatsScreen },
      { name: 'Settings', component: SettingsScreen },
    ],
    []
  )

  return (
    <View className="flex-1 bg-screen dark:bg-screen-dark">
      <SafeAreaView className="flex-1" edges={['top', 'bottom']}>
        <BotttomNavigation tabs={tabs} />
        <StatusBar style={isDark ? 'light' : 'dark'} translucent />
      </SafeAreaView>
    </View>
  )
}
