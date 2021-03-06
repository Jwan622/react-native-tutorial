import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen"
import ListScreen from "./src/screens/ListScreen"
import ImageScreen from "./src/screens/ImageScreen"
import CounterScreen from "./src/screens/CounterScreen"
import ColorScreen from "./src/screens/ColorScreen"
import SquareScreen from "./src/screens/SquareScreen"
import TextScreen from "./src/screens/TextScreen"
import PasswordScreen from "./src/screens/PasswordScreen"
import BoxScreen from "./src/screens/BoxScreen"
import BoxScreenExercise from "./src/screens/BoxScreenExercise"

const navigator = createStackNavigator( // used to show different screens to our user. that's navigation, appear different screens of content to our user.
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Password: PasswordScreen,
    Box: BoxScreen,
    Box2: BoxScreenExercise,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
