import { StyleSheet, View, Text } from 'react-native'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 30,
    backgroundColor: 'coral',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
})
