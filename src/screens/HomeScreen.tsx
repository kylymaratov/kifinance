import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function HomeScreen() {
  return (
    <View className="bg-gray-800">
      <Text className="text-white">Hello from Expo App</Text>
      <StatusBar style="auto" />
    </View>
  )
}
