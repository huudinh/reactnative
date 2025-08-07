# Thêm mới Todo

### Mục tiêu

- Quản lý State thêm Todo

### Tạo file components/Todo.js

```jsx
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Todo = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
})

export default Todo;

```

### Sửa file App.js

```jsx
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

```

## Các Câu Hỏi Thường Gặp Khi Phỏng Vấn (FAQ)

### Câu 1: KeyboardAvoidingView trong React Native là gì?

KeyboardAvoidingView là một component cốt lõi trong React Native giúp tránh việc bàn phím ảo che khuất các thành phần giao diện, đặc biệt là TextInput. Khi người dùng nhập liệu, bàn phím có thể xuất hiện và đẩy các thành phần xuống dưới màn hình, gây khó khăn trong thao tác. KeyboardAvoidingView giúp điều chỉnh bố cục để đảm bảo các thành phần vẫn hiển thị rõ ràng

Khi bàn phím xuất hiện, KeyboardAvoidingView sẽ:

Tự động điều chỉnh chiều cao, vị trí hoặc phần đệm dưới cùng của vùng chứa

Giữ cho các thành phần như TextInput, Button không bị che khuất

Hoạt động khác nhau trên iOS và Android, nên thường dùng Platform.OS để xử lý

### Câu 2: onChangeText trong React Native là gì?

Trong React Native, onChangeText là một prop của component TextInput dùng để xử lý sự kiện khi người dùng thay đổi nội dung văn bản trong ô nhập liệu. Đây là cách đơn giản và hiệu quả để cập nhật trạng thái (state) của ứng dụng khi người dùng gõ vào bàn phím.

onChangeText nhận một hàm callback với tham số là chuỗi văn bản mới.

Mỗi khi người dùng gõ hoặc xóa ký tự, hàm này sẽ được gọi.

Thường dùng để cập nhật state hoặc thực hiện kiểm tra dữ liệu đầu vào.

Nếu bạn chỉ cần lấy giá trị văn bản, dùng onChangeText là đủ. Nếu cần xử lý chi tiết hơn (như vị trí con trỏ, số lần thay đổi...), hãy dùng onChange.

### Câu 3: onPress trong React Native là gì?

Trong React Native, onPress là một prop (thuộc tính) được sử dụng để xử lý sự kiện khi người dùng nhấn (tap) vào một thành phần tương tác như TouchableOpacity, Button, Pressable, TouchableHighlight, v.v.

Khi người dùng chạm vào thành phần có onPress, hàm được gán sẽ được gọi.

Thường dùng để thực hiện hành động như chuyển màn hình, hiển thị thông báo, gửi dữ liệu,...

### Câu 4: Keyboard.dismiss trong React Native là gì?

Trong React Native, Keyboard.dismiss() là một hàm dùng để ẩn bàn phím ảo khi nó đang hiển thị. Đây là cách đơn giản và trực tiếp để loại bỏ bàn phím khỏi màn hình, đặc biệt hữu ích khi người dùng nhấn ra ngoài vùng nhập liệu hoặc sau khi hoàn tất nhập.


*Bài tiếp theo [View, Text & Styles](session_04_view.md)*