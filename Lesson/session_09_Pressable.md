# Sử dụng Pressable

Trong React Native, `Pressable` là một component được sử dụng để phát hiện các tương tác của người dùng như nhấn, giữ, và thả. Nó cung cấp một API linh hoạt để xử lý các sự kiện tương tác, cho phép bạn tạo ra các trải nghiệm người dùng phong phú và tùy chỉnh.

### Ví dụ sử dụng Pressable

```javascript
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? 'blue' : 'gray'
        },
        styles.button
      ]}
      onPress={() => {
        console.log('Button Pressed!');
      }}
    >
      <Text style={styles.text}>Press Me</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
```

### Giải thích:
- `Pressable` thay đổi màu nền của nút khi được nhấn (`pressed`).
- `onPress` là hàm xử lý sự kiện khi nút được nhấn.

`Pressable` rất hữu ích khi bạn cần kiểm soát chi tiết các tương tác của người dùng và muốn tạo ra các hiệu ứng tùy chỉnh dựa trên trạng thái nhấn. Nếu bạn có bất kỳ câu hỏi nào khác, hãy cho tôi biết nhé!

### Áp dụng Pressable vào bài toán todo

```
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

```

*Bài tiếp theo [Sử dụng Pressable](session_09_Pressable.md)*
