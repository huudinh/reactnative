import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Todo from './components/Todo';
import { useState } from 'react';

export default function App() {
  const [todo, setTodo] = useState();
  const [todoItems, setTodoItems] = useState([]);

  const handleAddTodo = () => {
    Keyboard.dismiss();
    setTodoItems([...todoItems, todo]);
    setTodo(null);
  }

  const completeTodo = (index) => {
    let itemsCopy = [... todoItems];
    itemsCopy.splice(index, 1);
    setTodoItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
        <View style={styles.todosWrapper}>
          <Text style={styles.sectionTitle}>Todos</Text>

          <View style={styles.items}>
            {
              todoItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => completeTodo(index)}>
                    <Todo text={item} />
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTodoWrapper}
        >
          <TextInput 
            style={styles.input} placeholder={'Write  a todo'} 
            value={todo}
            onChangeText={ text => setTodo(text)}  
          />
          <TouchableOpacity onPress={() => handleAddTodo()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>

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
  },
  writeTodoWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItem: 'center'
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    width: 250,
    borderWidth: 1,
    borderColor: '#c0c0c0',
    borderRadius: 60,
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#c0c0c0',
    borderRadius: 60,
  },
  addText:{},
});