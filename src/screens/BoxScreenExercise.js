import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
	<View style={styles.parentStyle}>
	  <View style={styles.viewOneStyle}/>
	  <View style={styles.viewTwoStyle}/>
	  <View style={styles.viewThreeStyle}/>
	</View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
	borderWidth: 3,
	borderColor: 'black',
	height: 200,
	flexDirection: 'row', // this affects how justifyContent works. It works on the primary axis, whcih is what flexDirection specifies
	justifyContent: 'space-between',
  },
  viewOneStyle: {
    height: 50,
	width: 50,
	backgroundColor: 'red',
  },
  viewTwoStyle: {
	height: 50,
	width: 50,
	backgroundColor: 'green',
	top: 50,
  },
  viewThreeStyle: {
	height: 50,
	width: 50,
	backgroundColor: 'blue',
  },
});

export default BoxScreen;
