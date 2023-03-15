import React, { useState, useContext } from 'react';
import { Button, TextInput, View } from 'react-native';

import { AuthContext } from './AuthContext';

function LoginInform() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext);

  const handleSignIn = () => {
    signIn(email, password);
  };

  return (
    <View>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  );
}

export default LoginInform;