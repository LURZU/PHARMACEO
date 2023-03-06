import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { LogInForm } from './src/components/LogInForm.js';

export default function App() {
  return (
    <>
    <LogInForm />
    <NavigationContainer>
    <View className="flex-1 items-center justify-center bg-white">
       <Text>Pharmaceo</Text>
      <StatusBar style="auto" />
    </View>
    </NavigationContainer>
    </>
    );
}
