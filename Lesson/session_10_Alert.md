# Feedback với Alert

### 1. Sử dụng `Alert` để hiển thị thông báo:

Trong React Native, bạn có thể sử dụng component `Alert` để hiển thị các hộp thoại thông báo hoặc cảnh báo cho người dùng. `Alert` rất hữu ích để thông báo cho người dùng về các sự kiện, lỗi hoặc yêu cầu xác nhận hành động.

   ```javascript
   import React from 'react';
   import { View, Button, Alert } from 'react-native';

   export default function App() {
     const showAlert = () => {
       Alert.alert(
         'Thông báo',
         'Đây là một hộp thoại cảnh báo!',
         [
           { text: 'Hủy', onPress: () => console.log('Hủy'), style: 'cancel' },
           { text: 'OK', onPress: () => console.log('OK') }
         ],
         { cancelable: false }
       );
     };

     return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Button title="Hiển thị thông báo" onPress={showAlert} />
       </View>
     );
   }
   ```

Trong ví dụ trên:
- Chúng ta nhập `Alert` và `Button` từ `react-native`.
- Hàm `showAlert` được gọi khi người dùng nhấn vào nút "Hiển thị thông báo".
- `Alert.alert` được sử dụng để hiển thị một hộp thoại cảnh báo với tiêu đề "Thông báo", nội dung là "Đây là một hộp thoại cảnh báo!", và hai nút "Hủy" và "OK".
- `cancelable: false` đảm bảo rằng người dùng không thể hủy hộp thoại bằng cách nhấn ngoài hộp thoại.

### 2. Sử dụng `TouchableWithoutFeedback`:

Trong React Native, `TouchableWithoutFeedback` là một component cho phép bạn bắt sự kiện nhấn mà không thay đổi giao diện của thành phần bị nhấn. Nó rất hữu ích khi bạn muốn bao bọc một thành phần khác để phát hiện sự kiện nhấn mà không muốn hiển thị bất kỳ phản hồi nào cho người dùng.

```javascript
import React from 'react';
import { View, Text, Alert, TouchableWithoutFeedback, StyleSheet } from 'react-native';

export default function App() {
  const handlePress = () => {
    Alert.alert('TouchableWithoutFeedback', 'Bạn đã nhấn vào thành phần này!');
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <Text>Nhấn vào đây nhưng không có phản hồi trực quan</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
```

Trong ví dụ này:
- `TouchableWithoutFeedback` bao bọc thành phần `View` chứa `Text`.
- Khi thành phần bị nhấn, hàm `handlePress` sẽ được gọi và hiển thị một thông báo bằng `Alert`.

### 3. Áp dụng cho bài toán todo

```ts
import { StyleSheet, Text, View, Button, FlatList, TextInput, Pressable, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: 'orange',
    paddingHorizontal:20,
    textAlign: 'center',
    paddingTop:40,
    fontSize:20,
  },
  container: {
    flex: 1,
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


*Bài tiếp theo [Feedback với Alert](session_10_Alert.md)*
