# React Native Project 👨‍💻

## What did I learn ? 🤔

I have learned a lot about React Native. And how to create a native project using [Expo](https://expo.io).

In the list below I have listed some of the things I have learned and explain them briefly:

- [StyleSheet 🎨](https://docs.expo.dev/versions/latest/react-native/stylesheet/) - StyleSheet allow us to customize our native app elements and style them using CSS. In order to use StyleSheet we need to import it in our app. and to create a StyleSheet we have to give it a name and create the StyleSheet like this:

```js
const styles = StyleSheet.create({})
```

And then if we want to style a `<View>` in our app for example we can add a style attribute to it and give it a name for example container and then we can use it like this:

```js
;<View style={styles.container}></View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
```

- [View 📦](https://docs.expo.dev/versions/v44.0.0/react-native/view/) - _View_ is the base component for all the other components. It is the most basic component in React Native. It is used to create a container for other components.

- [Text 📃](https://docs.expo.dev/versions/v44.0.0/react-native/text/) - _Text_ is used to create text elements in React Native.

- [FlatList](https://docs.expo.dev/versions/v44.0.0/react-native/flatlist/) - _FlatList_ is used to create a list of items. It is a better approach to create instant of components in React Native than using a `map()` function. All we need to know is the `data` that we want to display and `renderItem()` function that will be called for each item in the list to create it.

- [TouchableWithoutFeedback](https://docs.expo.dev/versions/v44.0.0/react-native/touchablewithoutfeedback/) - In this project we used it to wrap the container `<View>` and when for example we click anywhere on the screen the Keyboard will be dismissed in our app.

- [Alert 🔔](https://docs.expo.dev/versions/v44.0.0/react-native/alert/) - One of the most important component in React Native is the Alert. It is used to display a message to the user when certain events happen.

## What Have I built ? 🔥

I have built a simple Todo App using React Native.


## Tools ⚙

To create this project I used the following:

- [Expo](https://expo.io) - Expo is a mobile app development platform that allows you to build native mobile apps for iOS and Android.
- [Faker](https://github.com/faker-js/faker) - Faker is a library that generates fake data for you.

## Resourses 🔗

- [React Native Tutorial By The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ) - I followed this tutorial to learn React Native.
