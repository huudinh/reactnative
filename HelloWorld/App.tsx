import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [student, setStudent] = useState([
    { id: 1, name: 'John 1', age: 20},
    { id: 2, name: 'John 2', age: 20},
    { id: 3, name: 'John 3', age: 20},
    { id: 4, name: 'John 4', age: 20},
    { id: 5, name: 'John 5', age: 20},
    { id: 6, name: 'John 6', age: 20},
    { id: 7, name: 'John 7', age: 20},
    { id: 8, name: 'John 8', age: 20},
    { id: 9, name: 'John 9', age: 20},
    { id: 10, name: 'John 10', age: 20},
  ])

  return (
    <View style={styles.container}>
        <Text>
          helloworld
        </Text>
        <ScrollView>
          {student.map((item, index) => {
            return (
              <View key={item.id} style={{
                padding: 30,
                backgroundColor: 'pink',
                marginBottom:30
              }}>
                <Text> {item.name}</Text>
              </View>
            )
          })}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
