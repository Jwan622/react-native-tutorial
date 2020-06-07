JSX is compiled by Babel into valid Javascript.

## Chapter 3
- `FlatList` is a native react component that can be used to creaete a list.
- `data` and `renderItem` are two props that are required.
- without a key property for a list, react Native will delete entire list, and rebuild whole list even if you remove only one element from list. Using key, React Native can detect it only removed one element from list using a key.
- using a key, react will only delete one element and one small part of Dom. the key ties piece of data to element on screen. so if we give list a key id, react native will create element out of it and tag with same key id. It now knows which element in screen to clean up if the data is deleted.
```text
    <FlatList
      keyExtractor={(friend) => friend.name }
      data={friends}
      renderItem={({ item }) => {
        return <Text>{ item.name } </Text>
      }}
    />
```

## Chapter 4
- console.log appears in window running react native package. they don't appear on the mobile device.
- `Button` component is simple, `TouchableOpacity` component can do a lot more customization.
- TouchableOpacity can be used to touch for any kind of element. it wraps an element and if you touch element, an on press event is fired.
- the `Button` element comes with default styling.
- when you touch the TouchableOpactiy element, it briefly fades out, that's the opacity. gives feedback to users to let them know they touched it.
- `StackNavigator` is what allows us to navigate or change content that is visible on screen to users. `stacknavigator` decides what to show. passes down props to component.

![stack_navigator](notes_images/chapter_4/stack_navigator.png)
- a component shown by the stack navigator will have a props object. the `props.navigation.navigate` property can change components. can change content on screen of our device. pass in string that matches the route names which is the object that we pass as the first argument to the `createStackNavigator` function:
```text
const navigator = createStackNavigator( // used to show different screens to our user. that's navigation, appear different screens of content to our user.
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "App"
    }
  }
);
```
- the 3 route names are `Home`, `Components`, `List`, the keys of the first object. It then renders appropriate component.
- remember when you return in a component, has to be one component so use a `View` cmoponent to wrap everything. Kind of like a `template` compoennt in Vue.js

- The below
	`<ImageDetail title='Forest' imageSource={require('../../assets/forest.jpg')}/>`
- numbers assigned to props have to be in curly braces, strange right?

## Chapter 5
- `state` systems tracks piece of data that chagnes over time in our application, anytime data changes, content changes in our device. similar to props (commounicating parent to child)
- for state, if you update it, the screen will rerender. The variable has to be state for it to render. React-native does not watch non-state variables and change the screen. 
- need to use `useState` hook. using this hook, react will watch the data.
- this is how to set up state:
  `const [counter, setCounter] = useState(0);`
- the above sets a default state of 0. sets `coutner` to 0. the square brakcet is array destructuring in es6.
- when doing it this way, we don't want to modify counter variable directly like `counter++`. use the `setCounter` function that is returned from `useState`. Should look something like this:

```text
  const [counter, setCounter] = useState(0);

  return <View>
    <Button title="Increase" onPress={() => {
      setCounter(counter + 1);
    }}/>
    <Button title="Decrease" onPress={() => {
      setCounter(counter - 1);
    }}/>
```
- `setCounter` is used to update state variable. react does not detect if you manually make changes to state variable. when the screen rerenders, react-native knows that the component was rendered once so the useState doesn't reinitialize counter back to 0.
- we never modify state variable directly. never on the left hand side of equal sign.
- wyen a component is re-rendered, all children get re-rendered too. 
- state can be passed as a prop too.
- each copy of component with state has own copy of state.
- remember that `renderItem` prop gets called for every item inside of the `FlatList`
- if we do string interpolation, we do have to use string interpolation inside curly braces. For example:
```text
 <Button title={`Increase ${color}`} />
```

**General rule for sharing state among components**
- Create state variables in the most parent that needs to either 1. read value 2. change value.
- Pass the state down to children. How do they change the values? How do they read it? You can pass it as a prop to child to help the child to read. If the children needs to change the value in the aprent, you can pass a callback function. The callback is called in the child which changes state in the parent.

![callbacks](notes_images/chapter_6/callbacks.png)

- if we have multiple pieces of state that are closely related,  and known ways we are changing state, great candidate to manage state by a reducer. IF you have closely related state, and know how you're changing each of them, use a reducer.
- What is a **reducer**? Fancy name. Function taht has two arguments, first is a object with **all** state, argument 2 is object that describes that update that we want to make. Function that manages changes to an object, that's what a reducer is.
- first object might look like `{red:0, green:0, blue:0}` and second might look like `{colorToChange: 'red', amount: 15}`. Similar to what we have here... which makes us think we should make a reducer:

```text
  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0
          ? null
          : setRed(red + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };
``` 
- arugment 2 for a reducer is similar to the above setColor function inside our component.
- inside reducer, we look at argument 2, and make some decision on how to change argument 1. 
- never change argument 1 directly in a reducer.
- reducer returns new state object.
- `hooks` add in some additional functionality to a functional component.
- this is how to initialize state using reducers. the `dispatch` is what calls the reducer function. Whenever we want to change state, we call `dispatch` with an action object. When you call dispatch, react-native calls the reducer passed to `useReducer`. dispatch, calls reducer, reducer returns state which is one of the two things returned from useReducer, and when reducer returns value react rerenders component. :

```text
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
```
and reducer function looks like this:
- to change state in reducer, do not make change to state object directly. return a new state object by copying all of state over to a new object/dictionary.:

```text
const reducer = (state, action) => { //how to change state object is what the action is, the 2nd argument
  // state is an object with red:, green:, blue:
  // action is something like how to change state. we define the properties, something like {colorToChange: 'red', amount: 15 }

  switch(action.colorToChange) {
    case 'red':
      return { ...state, red: state.red + action.amount }
    case 'green':
    case 'blue':
    default:
  }

};
```
- in the syntax above, the red overwrites the red in the `...state` portion so the red on the right takes over. Remember, in a reducer we never want to change the state argument #1 directly.
- need to return something from reducer to use as state.
- the 2nd argument, action, in the reducer usually has `type` and `payload`, those are the conventions.
- We spread in the reducer like this:

```text
 return { ...state, count: state.count + action.payload };
```
why? we take all different value sout of state and put it in new object. So why spread? We do it to future proof our reducer if we add new key/value pairs. 

__Handling Text INputs__
- weird thing with handling text inputs. zero styling by default, so nothing to indicate taht it's visible on screen.
- might want to use props to prevent capitalziation and correction. `autoCapitalize="none"` `autoCorrect={false}`
- how do we get state of input into parent? Well we never want to reach from parent to child and get state. Parent should not know of child state. so we use a callback to talk to parent from child that is passed from parent. using `onChangeText`, the callback is called every time user types in input. We cna use this callback to update state in parent, when state changes, the parent rerenders and the child rerenders too. `onChangeText` is called with new value that user types in input.
- remember everytime we update state variable, component rerenders.


## Chatper 7
Styling

![styling](notes_images/chapter_7/layouts.png)

3 systems:
1. we use box object from web development when we position single element by itself.
2. flexbox is also from web. used to position children within parent.
3. position positions single child inside parent. used to override box or flexbox. 
- box object model first:
    - focuses on one element
    - refers to position around piece of content. 
    
    ![box_model](notes_images/chapter_7/box_model.png)

you can use properties to adjust width of different layers. margin, borderwidth, padding are what we can adjust.you can add to top, bottom, left and right. there are actually properties like `margin` for all sides, `marginVertical` for top and bottom, and `marginHorizontal` for left and right.
- flex box model. how siblings are algiend in commmon parent.














## Components from React Native
- FlatList. 
    - props: horizontal, data, renderItem, showsHorizontalScrollIndicator
- TouchableOpacity - highly customizable component that can detect a press like text or an image.
- Button - shows button and detects a press.
    - props: onPress, title
- View - used to wrap everything in a return statement in a component. return one single root element.
- Image - used to display images.
    - props: source
- TextInput - for input of text
    - props: autocorrect, autoCApitalize, value, onChangeText
    
