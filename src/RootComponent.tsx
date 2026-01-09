import '../global.css'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import HomeScreen from '@/screens/HomeScreen'
import StatsScreen from './screens/StatsScreen'
import SettingsScreen from './screens/SettingsScreen'
import { useThemeStyles } from './utils/themeStyles'

const Tab = createBottomTabNavigator()

interface Props {
  globalTheme: any
  isDark: boolean
}

export default function RootComponent({ globalTheme, isDark }: Props) {
  const { screenBackground } = useThemeStyles()
  const insets = useSafeAreaInsets()

  return (
    <View className={isDark ? 'dark' : ''} style={[{ flex: 1 }, screenBackground]}>
      <NavigationContainer theme={globalTheme}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName

              if (route.name === 'Home') {
                iconName = focused ? 'wallet' : 'wallet-outline'
              }
              if (route.name === 'Stats') {
                iconName = focused ? 'analytics' : 'analytics-outline'
              }
              if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline'
              }

              return <Ionicons name={iconName as any} size={size} color={color} />
            },
            tabBarActiveTintColor: '#15803d',
            tabBarInactiveTintColor: isDark ? '#9ca3af' : '#6b7280',
            tabBarStyle: {
              height: 65 + insets.bottom,
              paddingBottom: 5 + insets.bottom,
              paddingTop: 5,
              backgroundColor: isDark ? '#1e1f20' : '#ffffff',
              borderTopColor: isDark ? '#2a2b2c' : '#e5e5e5',
            },
            headerShown: false,
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ tabBarLabel: 'Overview' }}
          />
          <Tab.Screen
            name="Stats"
            component={StatsScreen}
            options={{ tabBarLabel: 'Stats' }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ tabBarLabel: 'Settings' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  )
}
