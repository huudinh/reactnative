# Sử dụng Flat List

`FlatList` là một component trong React Native được sử dụng để hiển thị danh sách các phần tử một cách hiệu quả. Nó được tối ưu hóa để xử lý các danh sách dài bằng cách chỉ render các phần tử hiển thị trên màn hình và một số phần tử xung quanh, giúp cải thiện hiệu suất.

### Điểm giống nhau giữa `FlatList` và `ScrollView`
- **Hiển thị danh sách**: Cả hai đều có thể được sử dụng để hiển thị danh sách các phần tử.
- **Cuộn nội dung**: Cả hai đều cho phép cuộn nội dung nếu danh sách dài hơn chiều cao màn hình.

### Điểm khác nhau giữa `FlatList` và `ScrollView`
- **Hiệu suất**: `FlatList` được tối ưu hóa cho các danh sách dài bằng cách chỉ render các phần tử hiển thị trên màn hình, trong khi `ScrollView` render tất cả các phần tử cùng một lúc, có thể gây ra vấn đề về hiệu suất khi danh sách quá dài.
- **API**: `FlatList` cung cấp nhiều thuộc tính và phương thức hữu ích để quản lý danh sách, như `keyExtractor`, `renderItem`, `ItemSeparatorComponent`, v.v.

### Ví dụ sử dụng `FlatList`
Dưới đây là một ví dụ về cách sử dụng `FlatList` để hiển thị một danh sách các phần tử:

```javascript
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [items, setItems] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    // Thêm các phần tử khác vào mảng
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    padding: 20,
    backgroundColor: 'lightblue',
    marginBottom: 10,
  },
});
```

### Tại sao nên dùng `FlatList`?
- **Hiệu suất cao**: `FlatList` chỉ render các phần tử hiển thị trên màn hình, giúp cải thiện hiệu suất khi làm việc với danh sách dài.
- **Tính năng phong phú**: `FlatList` cung cấp nhiều thuộc tính và phương thức hữu ích để quản lý danh sách, giúp bạn dễ dàng tùy chỉnh và tối ưu hóa giao diện.

Hy vọng giải thích này giúp bạn hiểu rõ hơn về `FlatList` và sự khác biệt so với `ScrollView`! Nếu bạn có bất kỳ câu hỏi nào khác, đừng ngần ngại hỏi nhé!

*Bài tiếp theo [Todo App](session_08_todo.md)*
