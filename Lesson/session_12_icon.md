# Sử dụng Icon

Để sử dụng Expo Vector Icons trong dự án React Native của bạn, bạn có thể làm theo các bước sau. `@expo/vector-icons` là một phần của Expo SDK, cung cấp một bộ icon đa dạng và dễ sử dụng. Bạn không cần cài đặt thêm bất kỳ thư viện bên ngoài nào nếu đang sử dụng Expo.

### 1. Cài đặt Expo CLI (nếu chưa cài đặt)
Nếu bạn chưa cài đặt Expo CLI, bạn có thể cài đặt nó bằng npm hoặc yarn:
```bash
npm install -g expo-cli
```
hoặc
```bash
yarn global add expo-cli
```

### 2. Khởi tạo dự án Expo mới
Nếu bạn chưa có dự án Expo, bạn có thể khởi tạo một dự án mới bằng cách:
```bash
expo init MyNewProject
cd MyNewProject
```

### 3. Sử dụng Expo Vector Icons
Expo đã tích hợp sẵn `@expo/vector-icons`, bạn không cần phải cài đặt thêm. Bạn có thể sử dụng các biểu tượng như sau:

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Thay thế bằng bộ icon bạn muốn sử dụng

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Expo Vector Icons Example</Text>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});
```

### 4. Chạy dự án
Bạn có thể chạy dự án của mình bằng cách:
```bash
expo start
```

Điều này sẽ khởi động dự án Expo và mở trình duyệt với Expo Developer Tools. Bạn có thể quét mã QR bằng ứng dụng Expo Go trên điện thoại của mình để xem ứng dụng đang chạy.

### 5. Sử dụng các bộ icon khác
`@expo/vector-icons` hỗ trợ nhiều bộ icon khác nhau. Dưới đây là một số ví dụ về cách sử dụng các bộ icon khác:

- **FontAwesome**:
  ```javascript
  import { FontAwesome } from '@expo/vector-icons';
  ```

- **MaterialIcons**:
  ```javascript
  import { MaterialIcons } from '@expo/vector-icons';
  ```

- **Ionicons**:
  ```javascript
  import { Ionicons } from '@expo/vector-icons';
  ```

Bạn có thể tham khảo danh sách đầy đủ các bộ icon và tên các icon tại [@expo/vector-icons](https://docs.expo.dev/guides/icons/).

### Hoàn thiện giao diện Todo

```ts
// App.tsx
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

```

*Bài tiếp theo [Sử dụng Icon](session_12_icon.md)*
