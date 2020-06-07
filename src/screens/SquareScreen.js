import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15;

const reducer = (state, action) => { //how to change state object is what the action is, the 2nd argument
  // state is an object with { red: 0 , green: 0, blue: 0 }
  // action is something like how to change state. we define the properties, the convention is: {type: 'red', payload: 15 }

  switch(action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state // need to return state when we don't do anything.
	    : { ...state, red: state.red + action.payload };
    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state // need to return state when we don't do anything.
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state // need to return state when we don't do anything.
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
  const { red, green, blue } = state;

  return <View>
    <ColorCounter
      color="Red"
      onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT}) }
      onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT}) }
    />
    <ColorCounter
      color="Blue"
	  onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
      onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
    />
    <ColorCounter
      color="Green"
      onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
      onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
    />

    <View style={{
      height: 150,
      width: 150,
      backgroundColor: `rgb(${red},${green},${blue})`
    }}/>
  </View>
};

const styles = StyleSheet.create({});

export default SquareScreen;
