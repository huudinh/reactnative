# Flex Box Basic

Chia bố cục (layout) trong React Native rất quan trọng để tạo ra các giao diện người dùng đẹp mắt và dễ sử dụng. Bạn có thể sử dụng các thành phần như `View`, `Flexbox`, `SafeAreaView`, `ScrollView`, v.v. để sắp xếp và quản lý bố cục của ứng dụng. Dưới đây là một số ví dụ và hướng dẫn cơ bản về cách chia bố cục trong React Native:

### Sử dụng `Flexbox`
Flexbox là công cụ mạnh mẽ để bố trí và sắp xếp các thành phần trong React Native. Các thuộc tính flex giúp bạn linh hoạt trong việc chia bố cục theo hàng hoặc cột.

#### Ví dụ: Bố cục cơ bản với Flexbox
```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>Box 1</Text>
      </View>
      <View style={styles.box2}>
        <Text>Box 2</Text>
      </View>
      <View style={styles.box3}>
        <Text>Box 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // 'row' for horizontal layout
  },
  box1: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    flex: 2,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box3: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

### Sử dụng `SafeAreaView`
`SafeAreaView` đảm bảo rằng các thành phần của bạn không bị trùng vào các khu vực an toàn của thiết bị (như notch trên iPhone).

#### Ví dụ: Sử dụng `SafeAreaView`
```javascript
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text>Inside SafeAreaView</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

### Sử dụng `ScrollView`
`ScrollView` cho phép bạn cuộn nội dung nếu chúng vượt quá kích thước màn hình.

#### Ví dụ: Sử dụng `ScrollView`
```javascript
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.box}><Text>Box 1</Text></View>
      <View style={styles.box}><Text>Box 2</Text></View>
      <View style={styles.box}><Text>Box 3</Text></View>
      <View style={styles.box}><Text>Box 4</Text></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '90%',
    height: 100,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});
```

### Kết hợp các thành phần
Bạn có thể kết hợp các thành phần `View`, `Flexbox`, `SafeAreaView`, và `ScrollView` để tạo ra các bố cục phức tạp hơn tùy theo yêu cầu của ứng dụng.

Nếu bạn cần thêm sự trợ giúp hoặc có câu hỏi cụ thể về cách chia bố cục trong React Native, hãy cho tôi biết nhé!


*Bài tiếp theo [Sử dụng Icon](session_12_icon.md)*
