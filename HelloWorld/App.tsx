import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
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
