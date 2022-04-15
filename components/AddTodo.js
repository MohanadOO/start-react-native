import { useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

export default function AddTodo({ addTodo }) {
  const [text, setText] = useState('')
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(value) => setText(value)}
        style={styles.input}
        placeholder='Enter Todo'
      />
      <Button
        title='Add Todo'
        color='coral'
        style={styles.todoButton}
        onPress={() => addTodo(text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'coral',
    marginBottom: 15,
  },
  todoButton: {
    padding: 15,
    backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 7,
  },
})
