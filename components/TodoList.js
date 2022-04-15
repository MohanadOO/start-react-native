// import { StatusBar } from 'expo-status-bar'
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   TextInput,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native'
// import { useState } from 'react'
// import { faker } from '@faker-js/faker'

// export default function App() {
//   faker.locale = 'ar'
//   const [count, setCount] = useState(0)
//   const [name, setName] = useState('Mohanad')
//   const [people, setPeople] = useState([
//     { name: faker.name.firstName() + ' ' + faker.name.lastName(), id: '1' },
//     { name: faker.name.firstName() + ' ' + faker.name.lastName(), id: '2' },
//     { name: faker.name.firstName() + ' ' + faker.name.lastName(), id: '3' },
//     { name: faker.name.firstName() + ' ' + faker.name.lastName(), id: '4' },
//     { name: faker.name.firstName() + ' ' + faker.name.lastName(), id: '5' },
//     { name: faker.name.firstName() + ' ' + faker.name.lastName(), id: '6' },
//     { name: faker.name.firstName() + ' ' + faker.name.lastName(), id: '7' },
//     { name: faker.name.firstName() + ' ' + faker.name.lastName(), id: '8' },
//   ])

  // const peopleList = people.map((person) => {
  //   return (
  //Using Map function to create a list of names and display them on the screen
  // <ScrollView>
  //   <Text
  //     style={{
  //       fontSize: 20,
  //       fontWeight: 'bold',
  //       padding: 20,
  //       marginTop: 10,
  //     }}
  //     key={person.key}
  //   >
  //     {person.name}
  //   </Text>
  // </ScrollView>
  //   )
  // })

//   function pressHandler(id) {
//     console.log(id)
//     setPeople((prevPerson) => {
//       return prevPerson.filter((person) => {
//         return person.id !== id
//       })
//     })
//   }

//   return (
//     <View style={styles.container}>
//       <View>
//         <Text>Enter Your Name:</Text>
//         <TextInput
//           placeholder='John Doe'
//           style={styles.input}
//           onChangeText={(value) => setName(value)}
//         />
//       </View>
//       <View style={styles.body}>
//         <Text>{name}</Text>
//         <Text>{count}</Text>
//       </View>
//       <View style={styles.header}>
//         <View style={{ marginBottom: 10 }}>
//           <Text style={{ fontWeight: 'bold' }}>
//             Press Increase to increase count 😮
//           </Text>
//         </View>
//         <Button
//           style={styles.buttonStyle}
//           title='Increase'
//           onPress={() => setCount((prevCount) => prevCount + 1)}
//         />
//       </View>
//       <View
//         style={{
//           backgroundColor: 'skyblue',
//           padding: 20,
//           margin: 20,
//         }}
//       >
//         {/* {peopleList} */}

//         {/* Using Flat List Component Method (NEW 😮) 
//         Flat will look automatically for a key */}
//         <FlatList
//           keyExtractor={(item) => item.id}
//           data={people}
//           renderItem={({ item }) => (
//             <TouchableOpacity onPress={() => pressHandler(item.id)}>
//               <Text style={styles.item}>{item.name}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//       <StatusBar style='auto' />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//     textAlign: 'center',
//     marginTop: 50,
//   },
//   header: {
//     display: 'flex',
//     gap: 5,
//     backgroundColor: 'pink',
//     padding: 20,
//     marginTop: 20,
//   },
//   body: {
//     backgroundColor: 'yellow',
//     padding: 20,
//     marginTop: 20,
//     borderRadius: 8,
//     textSize: '50px',
//     textAlign: 'center',
//   },
//   buttonStyle: {
//     marginTop: 20,
//     borderRadius: 100,
//     boxShadow: '0 0 10 #FFF',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#777',
//     padding: 8,
//     margin: 10,
//     width: 200,
//   },
//   item: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     padding: 20,
//     marginTop: 10,
//     backgroundColor: 'pink',
//   },
// })
