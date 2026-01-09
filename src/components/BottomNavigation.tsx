import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native'
import { View } from 'react-native'
import { TTabScreen } from '@/types/tab.types'
import { useThemeContext } from '@/contexts/ThemeContext'
import { useAppTheme } from '@/hooks/useAppTheme'

interface Props {
  tabs: TTabScreen[]
}

const Tab = createBottomTabNavigator()

export default function BotttomNavigation({ tabs }: Props) {
  const { isDark } = useThemeContext()
  const { appTheme } = useAppTheme()

  return (
    <View style={[{ flex: 1 }]}>
      <NavigationContainer theme={appTheme}>
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

              return (
                <Ionicons name={iconName as any} size={size} color={color} />
              )
            },
            tabBarActiveTintColor: '#15803d',
            tabBarInactiveTintColor: isDark ? '#9ca3af' : '#6b7280',
            tabBarStyle: {
              height: 65,
              paddingBottom: 5,
              paddingTop: 5,
              borderRadius: 15,
            },
            headerShown: false,
          })}
        >
          {tabs.map((tab) => (
            <Tab.Screen
              key={tab.name}
              name={tab.name}
              component={tab.component}
              options={{ tabBarLabel: tab.name }}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  )
}
