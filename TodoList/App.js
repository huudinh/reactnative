import { StyleSheet, Text, View } from 'react-native';
import Todo from './components/Todo';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.todosWrapper}>
          <Text style={styles.sectionTitle}>Today's Todos</Text>

          <View style={styles.items}>
            <Todo text='Todo 1' />
            <Todo text='Todo 2' />
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  todosWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle: {
    fontSize:24,
    fontWeight:'bold',
  },
  items: {
    marginTop: 20,
  }
});