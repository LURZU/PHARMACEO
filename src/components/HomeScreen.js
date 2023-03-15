import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from './AuthContext';

export default function HomeScreen() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <View>
      <Text>Welcome, {user.email}!</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
}