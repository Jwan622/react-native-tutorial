import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  // state { count: number }
  // action is { type: 'increment' || 'decrement', payload: 1 } counter only goes up or down by 1, so don't need a payload.

  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 }) // initial state can be object, array, value, typically an object because many properties we need to keep track of.
  // reducer is a reducer function, dispatch is what we need to call to call reducer.

  return <View>
    <Button title="Increase" onPress={() => {
      dispatch({ type: 'increment', payload: 1 })
    }}/>
    <Button title="Decrease" onPress={() => {
      dispatch({ type: 'decrement', payload: 1 })
    }}/>
    <Text>Current Count: {state.count}</Text>
  </View>
};

const styles = StyleSheet.create({});

export default CounterScreen;

