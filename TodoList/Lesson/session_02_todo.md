# Tạo components Todo

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
            <View style={styles.circular}>

            </View>
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

```

## Các Câu Hỏi Thường Gặp Khi Phỏng Vấn (FAQ)

### Câu 1: View trong React Native là gì?

Trong React Native, View là thành phần cơ bản nhất dùng để xây dựng giao diện người dùng. Nó tương tự như thẻ <div> trong HTML và đóng vai trò như một container để chứa các thành phần khác như Text, Image, hoặc thậm chí là các View lồng nhau

Container: Dùng để nhóm các thành phần giao diện lại với nhau.

Hỗ trợ Flexbox: Cho phép bố trí layout linh hoạt.

Style tùy chỉnh: Có thể áp dụng các thuộc tính như màu nền, kích thước, lề, padding,...

Xử lý sự kiện: Có thể gán các sự kiện như chạm (onTouchStart, onPress,...).

Tương thích đa nền tảng: Tự động ánh xạ sang UIView trên iOS hoặc android.view trên Android

### Câu 2: Text trong React Native là gì?

Trong React Native, Text là thành phần cơ bản dùng để hiển thị văn bản trong giao diện người dùng. Nó tương tự như thẻ <p> hoặc <span> trong HTML, nhưng được tối ưu hóa cho ứng dụng di động trên cả iOS và Android.

Hiển thị văn bản: Dùng để render chữ, số, ký tự,...

Hỗ trợ lồng nhau: Có thể lồng nhiều Text bên trong nhau để kế thừa style.

Tùy chỉnh kiểu dáng: Có thể áp dụng các thuộc tính như màu sắc, kích thước, font,...

Xử lý sự kiện: Có thể gán sự kiện như onPress để xử lý khi người dùng nhấn vào văn bản.

### Câu 3: Cách style trong React Native

Trong React Native, bạn sử dụng JavaScript để định nghĩa style, thay vì CSS như trên web. Các style được viết dưới dạng đối tượng JavaScript với cú pháp camelCase (ví dụ: backgroundColor thay vì background-color).

**1. Inline Style – Viết trực tiếp trong thuộc tính**

```jsx
<Text style={{ fontSize: 20, color: 'blue' }}>Hello, World!</Text>
```

Nhanh gọn, dễ dùng cho các style đơn giản


Không tối ưu cho ứng dụng lớn hoặc nhiều thành phần

**2. StyleSheet.create – Tạo style riêng biệt để tái sử dụng**

```jsx
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'blue',
  },
});

const App = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello, World!</Text>
  </View>
);
```
Tối ưu hiệu năng

Dễ quản lý và tái sử dụng

### Câu 4: TouchableOpacity trong React Native là gì?

TouchableOpacity là một component tương tác trong React Native, dùng để xử lý sự kiện chạm (touch). Khi người dùng nhấn vào, nó sẽ giảm độ mờ (opacity) của phần tử con bên trong, tạo hiệu ứng phản hồi trực quan.

Hiệu ứng nhấn: Làm mờ phần tử khi người dùng chạm vào

Xử lý sự kiện: Dễ dàng gán hàm onPress để thực hiện hành động

Dễ sử dụng: Có thể bao quanh bất kỳ thành phần nào như Text, Image, View,..

*Bài tiếp theo [Thêm mới Todo](session_03_addTodo.md)*
