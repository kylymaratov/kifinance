import { View, Text, Switch, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '../contexts/ThemeContext'
import { useThemeStyles } from '../utils/themeStyles'

export default function SettingsScreen() {
  const { theme, isDark, setTheme, toggleTheme } = useTheme()
  const { screenBackground } = useThemeStyles()

  return (
    <SafeAreaView className="flex-1 bg-white" style={screenBackground} edges={['top']}>
      <View className="px-4 py-6">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Settings
        </Text>

    
        <View className="mb-6">
          <Text className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase">
            Appearance
          </Text>

           
        
          <View className="bg-card-background dark:bg-card-background-dark  rounded-lg p-2">
            <TouchableOpacity
              onPress={() => setTheme('light')}
              className={`flex-row items-center justify-between p-3 rounded ${
                theme === 'light' ? 'bg-green-100 dark:bg-green-900/30' : ''
              }`}
            >
              <View className="flex-row items-center">
                <Ionicons
                  name="sunny"
                  size={20}
                  color={theme === 'light' ? '#15803d' : '#6b7280'}
                />
                <Text
                  className={`ml-3 text-base ${
                    theme === 'light'
                      ? 'text-green-700 dark:text-green-400 font-medium'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  Light
                </Text>
              </View>
              {theme === 'light' && (
                <Ionicons name="checkmark" size={20} color="#15803d" />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setTheme('dark')}
              className={`flex-row items-center justify-between p-3 rounded ${
                theme === 'dark' ? 'bg-green-100 dark:bg-green-900/30' : ''
              }`}
            >
              <View className="flex-row items-center">
                <Ionicons
                  name="moon"
                  size={20}
                  color={theme === 'dark' ? '#15803d' : '#6b7280'}
                />
                <Text
                  className={`ml-3 text-base ${
                    theme === 'dark'
                      ? 'text-green-700 dark:text-green-400 font-medium'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  Dark
                </Text>
              </View>
              {theme === 'dark' && (
                <Ionicons name="checkmark" size={20} color="#15803d" />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setTheme('system')}
              className={`flex-row items-center justify-between p-3 rounded ${
                theme === 'system' ? 'bg-green-100 dark:bg-green-900/30' : ''
              }`}
            >
              <View className="flex-row items-center">
                <Ionicons
                  name="phone-portrait"
                  size={20}
                  color={theme === 'system' ? '#15803d' : '#6b7280'}
                />
                <Text
                  className={`ml-3 text-base ${
                    theme === 'system'
                      ? 'text-green-700 dark:text-green-400 font-medium'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  System
                </Text>
              </View>
              {theme === 'system' && (
                <Ionicons name="checkmark" size={20} color="#15803d" />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
