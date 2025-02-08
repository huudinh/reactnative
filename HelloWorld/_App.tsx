import { StyleSheet, Text, View, Button, FlatList, TextInput, Pressable, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
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
      Alert.alert('Lỗi Input todo', 'Vui lòng nhập todo', [
        {text: 'Xác nhận'}
      ]);
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
          <Text style={styles.header}>
            Todo App
          </Text>

          <View style={styles.form}>
            <TextInput 
              style={styles.todoInput} 
              onChangeText={(value) => setTodo((value))}
              value={todo}
            />
            <Button title='Add todo' 
              onPress={handleAddTodo}
            />
          </View>

          <View style={styles.todo}>
            <FlatList
              data = {listTodo}
              renderItem = {(({item})=>{
                return (
                  <Pressable 
                    onPress={() => deleteTodo(item.id)}
                    style={({pressed}) => ({opacity:pressed ? 0.5 : 1})}
                  >
                    <View style={styles.groupTodo}>
                      <Text style={styles.todoItem}>{item.name}</Text>
                      <AntDesign name="close" size={24} color="black" />
                    </View>
                  </Pressable>
                )
              })}
            />
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  groupTodo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:15,
    borderWidth:1,
    borderStyle: 'dashed',
    justifyContent: 'space-between',
    padding:10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    backgroundColor: 'orange',
    paddingHorizontal:20,
    textAlign: 'center',
    paddingTop:40,
    fontSize:20,
    flex: 1,
  },
  form: {
    marginBottom: 20,
  },
  todo: {
    flex: 8
  },
  todoInput: {
    borderBottomWidth:1,
    borderBottomColor: 'green',
    padding: 5,
    margin:15
  },
  todoItem: {
    fontSize:20,
  },
  body:{
    paddingHorizontal: 10,
    marginBottom:20,
    flex: 1,
  }
});
