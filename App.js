import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { faker } from '@faker-js/faker'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
// import SandBox from './components/SandBox'

export default function ToDoList() {
  const [todos, setTodos] = useState([
    { text: faker.lorem.sentence(), key: '1' },
    { text: faker.lorem.sentence(), key: '2' },
    { text: faker.lorem.sentence(), key: '3' },
    { text: faker.lorem.sentence(), key: '4' },
    { text: faker.lorem.sentence(), key: '5' },
    { text: faker.lorem.sentence(), key: '6' },
    { text: faker.lorem.sentence(), key: '7' },
  ])

  function itemHandler(key) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key)
    })
  }

  function addTodo(text) {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: (prevTodos.length + 1).toString() },
          ...prevTodos,
        ]
      })
    } else {
      Alert.alert('Oops!', 'Todos must be over 3 characters', [
        { text: 'Understood', onPress: () => console.log('Alert closed') },
      ])
    }
  }

  return (
    //  Testing SandBox component to learn how flex work with React Native.
    //  <SandBox />

    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
        console.log('Dismissed Keyboard')
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo addTodo={addTodo} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} itemHandler={itemHandler} />
              )}
            />
          </View>
        </View>
        <StatusBar style={'auto'} />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    margin: 30,
    flex: 1,
  },
  list: {
    flex: 1,
  },
})
