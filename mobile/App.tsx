import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

const string: String = 'Hello World!'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-3xl font-bold text-white">{string}</Text>
      <StatusBar style="auto" />
    </View>
  )
}
