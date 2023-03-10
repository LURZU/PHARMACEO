import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LogInForm  from './src/components/LogInForm';


export default function App() {
  return (
    <>
    <NavigationContainer>
    <View className="flex-1 items-center justify-center bg-white">
       <Text>Pharmaceo</Text>
       <LogInForm />
      <StatusBar style="auto" />
    </View>
    </NavigationContainer>
    </>
    );
}
