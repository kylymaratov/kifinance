import { Text, View } from 'react-native'

export default function HomeScreen() {
  return (
    <View className="flex-1">
      <View className="p-4">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white">
          Hello from Expo App
        </Text>
      </View>
    </View>
  )
}
