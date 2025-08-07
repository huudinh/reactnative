# View, Text & Styles

Trong React Native, `View`, `Text`, và `Styles` là các thành phần cơ bản để xây dựng giao diện người dùng. Dưới đây là mô tả chi tiết về từng thành phần:

### View
- **Mô tả**: `View` là một container cơ bản trong React Native, tương tự như `div` trong HTML. Nó được sử dụng để chứa các thành phần khác và có thể được sử dụng để tạo bố cục.
- **Sử dụng**:
  ```javascript
  import React from 'react';
  import { View } from 'react-native';

  const MyComponent = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* Các thành phần khác */}
      </View>
    );
  };

  export default MyComponent;
  ```

### Text
- **Mô tả**: `Text` là thành phần được sử dụng để hiển thị văn bản trong React Native. Nó tương tự như `span` hoặc `p` trong HTML.
- **Sử dụng**:
  ```javascript
  import React from 'react';
  import { Text } from 'react-native';

  const MyComponent = () => {
    return (
      <Text style={{ fontSize: 20, color: 'blue' }}>
        Hello World
      </Text>
    );
  };

  export default MyComponent;
  ```

### Styles
- **Mô tả**: `Styles` trong React Native được sử dụng để định dạng và bố cục các thành phần. Bạn có thể sử dụng `StyleSheet` để tạo các kiểu dáng và áp dụng chúng vào các thành phần.
- **Sử dụng**:
  ```javascript
  import React from 'react';
  import { StyleSheet, Text, View } from 'react-native';

  const MyComponent = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Hello World
        </Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    text: {
      fontSize: 20,
      color: 'blue',
    },
  });

  export default MyComponent;
  ```

Hy vọng những thông tin trên sẽ giúp bạn hiểu rõ hơn về cách sử dụng `View`, `Text`, và `Styles` trong React Native. Nếu bạn có bất kỳ câu hỏi nào khác, đừng ngần ngại hỏi thêm nhé!

*Bài tiếp theo [Sử dụng State](session_04_state.md)*
