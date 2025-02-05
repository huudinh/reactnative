# Feedback với Alert

1. **Sử dụng `Alert` để hiển thị thông báo**:

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

2. **Sử dụng `TouchableWithoutFeedback`**:

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


*Bài tiếp theo [Feedback với Alert](session_10_Alert.md)*
