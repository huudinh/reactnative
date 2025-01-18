# Sử dụng State, Button

Trong React Native, `State` và `Button` là hai thành phần quan trọng để xây dựng các ứng dụng tương tác. Dưới đây là cách sử dụng chúng:

### State
`State` trong React Native được sử dụng để quản lý dữ liệu thay đổi trong ứng dụng. Bạn có thể sử dụng `useState` hook để tạo và cập nhật state.

**Ví dụ**:
```javascript
import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default MyComponent;
```

### Button
`Button` là một thành phần giao diện người dùng cơ bản trong React Native, được sử dụng để tạo các nút bấm. Bạn có thể sử dụng thuộc tính `onPress` để xác định hành động khi nút được bấm.

**Ví dụ**:
```javascript
import React from 'react';
import { Button, View } from 'react-native';

const MyButton = () => {
  const handlePress = () => {
    alert('Button pressed!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Press me" onPress={handlePress} />
    </View>
  );
};

export default MyButton;
```

### Kết hợp State và Button
Bạn có thể kết hợp `State` và `Button` để tạo các ứng dụng tương tác. Ví dụ dưới đây sẽ hiển thị số lần nút được bấm:

```javascript
import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default CounterApp;
```

Hy vọng những ví dụ trên sẽ giúp bạn hiểu rõ hơn về cách sử dụng `State` và `Button` trong React Native. Nếu bạn có bất kỳ câu hỏi nào khác, đừng ngần ngại hỏi thêm nhé!


*Bài tiếp theo [Text Inputs](session_05_inputs.md)*
