# Sử dụng TextInput

Trong React Native, `TextInput` là thành phần được sử dụng để nhận dữ liệu từ người dùng thông qua bàn phím. Dưới đây là cách sử dụng `TextInput`:

### Sử dụng cơ bản
```javascript
import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';

const MyComponent = () => {
  const [text, setText] = useState('');

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Nhập văn bản"
        onChangeText={newText => setText(newText)}
        value={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {text}
      </Text>
    </View>
  );
};

export default MyComponent;
```

### Các thuộc tính phổ biến của `TextInput`
- **`placeholder`**: Văn bản hiển thị khi `TextInput` trống.
- **`value`**: Giá trị hiện tại của `TextInput`.
- **`onChangeText`**: Hàm gọi lại khi văn bản thay đổi.
- **`style`**: Định dạng cho `TextInput`.

### Ví dụ nâng cao
Dưới đây là ví dụ về `TextInput` với nhiều thuộc tính hơn:
```javascript
import React, { useState } from 'react';
import { TextInput, View, Text, Button } from 'react-native';

const MyComponent = () => {
  const [text, setText] = useState('');

  const handleClear = () => {
    setText('');
  };

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Nhập văn bản"
        onChangeText={newText => setText(newText)}
        value={text}
        keyboardType="default"
        returnKeyType="done"
        secureTextEntry={false}
      />
      <Button title="Clear" onPress={handleClear} />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {text}
      </Text>
    </View>
  );
};

export default MyComponent;
```

Hy vọng những ví dụ trên sẽ giúp bạn hiểu rõ hơn về cách sử dụng `TextInput` trong React Native. Nếu bạn có bất kỳ câu hỏi nào khác, đừng ngần ngại hỏi thêm nhé!

*Bài tiếp theo [Sử dụng Array](session_06_array.md)*
