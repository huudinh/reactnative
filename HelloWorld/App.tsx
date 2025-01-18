import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('...');
  const [age, setAge] = useState<number>(20);

  return (
    <View style={styles.container}>
      <View>
        <Text>
          Names: {name}
        </Text>
        <TextInput 
          multiline
          onChangeText={(value) => setName(value)}
          style={{
            width:200,
            padding:10,
            borderWidth:1,
            borderColor:'green',
          }}
        />
      </View>
      <View>
        <Text>
          Age: {age}
        </Text>
        <TextInput 
          onChangeText={(value) => setAge(+value)}
          keyboardType='numeric'
          maxLength={2}
          style={{
            width:200,
            padding:10,
            borderWidth:1,
            borderColor:'green',
          }}
        />
      </View>
      <Text style={{ fontSize:60 }}>
        count = {count}
      </Text>
      <View>
        <Button 
          title="Increase" 
          color={'green'}
          onPress={() => setCount(count + 1)} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
