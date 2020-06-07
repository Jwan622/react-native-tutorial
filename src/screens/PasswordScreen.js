import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const PasswordScreen = () => {
  const [password, setPassword] = useState('DEFAULT STRING from TEXT SCREEN COMPONENT');

  return (
	<View>
	  <Text> Enter Password: </Text>
	  <TextInput
		style={styles.input}
		autoCapitalize="none"
		autoCorrect={false}
		value={password}
		onChangeText={(newValue) => setPassword(newValue)}
	  />

	  <Text>My name is {password}</Text>

	  {password.length < 4 ? <Text>Password must be longer than 4 characters</Text> : null}
	</View>
  );
};

const styles = StyleSheet.create({
  input: { // needs default styling for a text input otherwise nothing is there.
	margin: 15,
	borderColor: 'black',
	borderWidth: 1,
  }
});

export default PasswordScreen;
