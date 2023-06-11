import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

const string = 'Hello World!'

export default function App() {
  return (
    <View className='bg-black flex-1 justify-center items-center'>
      <Text className='font-bold text-white text-3xl'>{string}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

