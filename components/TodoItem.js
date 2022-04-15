import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

function TodoItem({ item, itemHandler }) {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => itemHandler(item.key)}>
        <MaterialIcons name='delete' size={18} color='#333' />
      </TouchableOpacity>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#bbb',
    borderStyle: 'dashed',
    marginTop: 10,
    borderRadius: 5,
  },
  text: {
    marginLeft: 10,
  },
})

export default TodoItem
