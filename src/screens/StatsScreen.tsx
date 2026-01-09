import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useThemeStyles } from '../utils/themeStyles'

export default function StatsScreen() {
  const { screenBackground } = useThemeStyles()

  return (
    <SafeAreaView className="flex-1 bg-white" style={screenBackground} edges={['top']}>
      <View className="p-4">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white">
          Stats
        </Text>
      </View>
    </SafeAreaView>
  )
}
