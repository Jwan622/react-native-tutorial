import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>Box Screen</Text>
  </View>
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
  },
  textStyle: {
    marginVertical: 20,
    marginHorizontal: 20,
    borderWidth: 10,
    borderColor: 'red',
  }
});

export default BoxScreen;
