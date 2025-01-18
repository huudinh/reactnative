# Tạo ứng dụng Hello World

Tạo dự án "Hello World" bằng TypeScript với `npx create-expo-app@latest` rất đơn giản. Dưới đây là các bước cơ bản để bạn bắt đầu:

1. **Cài đặt Node.js và npm**: Đầu tiên, bạn cần cài đặt Node.js và npm (Node Package Manager). Bạn có thể tải chúng từ [trang web chính thức của Node.js](https://nodejs.org/).

2. **Tạo dự án mới**: Mở terminal và chạy lệnh sau để tạo một dự án Expo mới với TypeScript:
   ```bash
   npx create-expo-app@latest HelloWorld --template
   ```

3. **Di chuyển vào thư mục dự án**: Sau khi dự án được tạo, di chuyển vào thư mục dự án:
   ```bash
   cd HelloWorld
   ```

4. **Chạy ứng dụng**: Chạy ứng dụng trên thiết bị giả lập hoặc thiết bị thật:
   ```bash
   npm start
   ```

5. **Chỉnh sửa mã nguồn**: Mở tệp `App.tsx` trong thư mục dự án và thay đổi nội dung để hiển thị "Hello World":
   ```typescript
   import React from 'react';
   import { Text, View } from 'react-native';

   const App: React.FC = () => {
     return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Hello World</Text>
       </View>
     );
   };

   export default App;
   ```

6. **Build file APK**: Để build file APK, bạn cần sử dụng Expo's build service. Chạy lệnh sau để bắt đầu quá trình build:
   ```bash
   eas build --platform android
   ```
   Bạn sẽ cần đăng nhập vào tài khoản Expo và làm theo hướng dẫn để hoàn tất quá trình build. Sau khi build xong, bạn sẽ nhận được một liên kết để tải xuống file APK.   

Chúc bạn thành công với ứng dụng Expo của mình! Nếu bạn gặp bất kỳ vấn đề nào, đừng ngần ngại hỏi thêm nhé.