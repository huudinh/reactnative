# Todo App

Đoạn mã sau tạo ra một ứng dụng to-do đơn giản, bạn có thể thêm các mục vào danh sách và hiển thị chúng. 

1. **Nhập các thành phần**:
   ```javascript
   import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native';
   import { useState } from 'react';
   ```
   - Đoạn mã này nhập các thành phần cần thiết từ `react-native` và hook `useState` từ React.

2. **Định nghĩa giao diện**:
   ```javascript
   interface ITodo {
     id: number;
     name: string;
   }
   ```
   - Định nghĩa một giao diện TypeScript `ITodo` với hai thuộc tính: `id` (số) và `name` (chuỗi).

3. **Thành phần chính**:
   ```javascript
   export default function App() {
   ```
   - Đây là thành phần chức năng chính của ứng dụng.

4. **Biến trạng thái**:
   ```javascript
   const [todo, setTodo] = useState('');
   const [listTodo, setListTodo] = useState<ITodo[]>([]);
   ```
   - `todo`: Một biến trạng thái để lưu trữ giá trị đầu vào hiện tại.
   - `listTodo`: Một biến trạng thái để lưu trữ danh sách các mục cần làm.

5. **Hàm tạo số ngẫu nhiên**:
   ```javascript
   function randomInterger(min: number, max: number) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
   }
   ```
   - Tạo ra một số nguyên ngẫu nhiên giữa `min` và `max`.

6. **Xử lý thêm mục cần làm**:
   ```javascript
   const handleAddTodo = () => {
     if (!todo) return;
     setListTodo([...listTodo, { id: randomInterger(2, 1000000), name: todo }]);
     setTodo('');
   }
   ```
   - Thêm một mục cần làm mới vào danh sách với `id` ngẫu nhiên và giá trị `todo` hiện tại, sau đó đặt lại giá trị `todo`.

7. **Trả về JSX**:
   ```javascript
   return (
     <View style={styles.container}>
       <Text style={styles.header}>Todo App</Text>
       <View style={styles.body}>
         <TextInput
           style={styles.todoInput}
           onChangeText={(value) => setTodo(value)}
           value={todo}
         />
         <Button title='Add todo' onPress={handleAddTodo} />
       </View>
       <View style={styles.body}>
         <FlatList
           data={listTodo}
           renderItem={({ item }) => {
             return <Text style={styles.todoItem}>{item.name}</Text>;
           }}
         />
       </View>
     </View>
   );
   ```
   - Hiển thị các thành phần giao diện chính: tiêu đề, trường nhập liệu, nút "Add todo" và danh sách các mục cần làm.

8. **Định nghĩa kiểu dáng**:
   ```javascript
   const styles = StyleSheet.create({
     header: {
       backgroundColor: 'orange',
       paddingHorizontal: 20,
       textAlign: 'center',
       fontSize: 20,
     },
     container: {
       flex: 1,
       paddingTop: 40,
       backgroundColor: '#fff',
     },
     todoInput: {
       borderBottomWidth: 1,
       borderBottomColor: 'green',
       padding: 5,
       margin: 15,
     },
     todoItem: {
       fontSize: 20,
       marginBottom: 15,
       borderWidth: 1,
       borderStyle: 'dashed',
       padding: 10,
     },
     body: {
       paddingHorizontal: 10,
       marginBottom: 20,
     },
   });
   ```
   - Định nghĩa kiểu dáng cho các thành phần khác nhau bằng cách sử dụng `StyleSheet.create`.


*Bài tiếp theo [Sử dụng Pressable](session_09_Pressable.md)*
