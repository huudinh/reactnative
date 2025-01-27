import { StyleSheet, Text, View, Button, FlatList, TextInput, Pressable } from 'react-native';
import { useState } from 'react';

interface ITodo {
  id: number;
  name: string
}

export default function App() {

  const [todo, setTodo ] = useState('');

  const [listTodo, setListTodo] = useState<ITodo[]>([]);

  function randomInterger(min:number, max:number){
    return Math.floor(Math.random() * (max - min  +1)) + min;
  }

  const handleAddTodo = () => {
    if(!todo) {
      alert('Please enter a todo');
      return;
    };
    setListTodo([...listTodo, {id:randomInterger(2, 1000000), name:todo}]);
    setTodo('');
  }

  const deleteTodo = (id:number) => {
    const newList = listTodo.filter((item) => item.id !== id);
    setListTodo(newList);
  }

  return (
    <View style={styles.container}>
        <Text style={styles.header}>
          Todo App
        </Text>

        <View style={styles.body}>
          <TextInput 
            style={styles.todoInput} 
            onChangeText={(value) => setTodo((value))}
            value={todo}
          />
          <Button title='Add todo' 
            onPress={handleAddTodo}
          />
        </View>

        <View style={styles.body}>
          <FlatList
            data = {listTodo}
            renderItem = {(({item})=>{
              return (
                <Pressable 
                  onPress={() => deleteTodo(item.id)}
                  style={({pressed}) => ({opacity:pressed ? 0.5 : 1})}
                >
                  <Text style={styles.todoItem}>{item.name}</Text>
                </Pressable>
              )
            })}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: 'orange',
    paddingHorizontal:20,
    textAlign: 'center',
    fontSize:20,
  },
  container: {
    flex: 1,
    paddingTop:40,
    backgroundColor: '#fff',
  },
  todoInput: {
    borderBottomWidth:1,
    borderBottomColor: 'green',
    padding: 5,
    margin:15
  },
  todoItem: {
    fontSize:20,
    marginBottom:15,
    borderWidth:1,
    borderStyle: 'dashed',
    padding:10
  },
  body:{
    paddingHorizontal: 10,
    marginBottom:20
  }
});
