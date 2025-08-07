# Tạo ứng dụng TodoList

### Đăng ký tài khoản expo

1. Đăng ký tài khoản expo https://expo.dev

2. Cài đặt Android Studio https://developer.android.com/

3. **Cài đặt Node.js và npm**: Cài đặt Node.js và npm (Node Package Manager). Bạn có thể tải chúng từ [trang web chính thức của Node.js](https://nodejs.org/).

### Cài đặt TodoList

1. **Tạo dự án mới**: Mở terminal và chạy lệnh sau để tạo một dự án Expo mới với TypeScript:
   ```bash
   npx create-expo-app@latest TodoList --template
   ```

2. **Di chuyển vào thư mục dự án**: Sau khi dự án được tạo, di chuyển vào thư mục dự án:
   ```bash
   cd TodoList
   ```

3. **Chạy ứng dụng**: Chạy ứng dụng trên thiết bị giả lập hoặc thiết bị thật:
   ```bash
   npm start
   ```

4. **Chỉnh sửa mã nguồn**: Mở tệp `App.js` trong thư mục dự án và thay đổi nội dung để hiển thị "Hello World":
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

### Build file APK với Expo

1. **Cài đặt EAS CLI**: Đảm bảo rằng bạn đã cài đặt EAS CLI. Nếu chưa, bạn có thể cài đặt bằng cách chạy lệnh sau:
   ```bash
   npm install -g eas-cli
   ```

2. **Đăng nhập vào tài khoản Expo**: Đăng nhập vào tài khoản Expo của bạn bằng cách chạy lệnh sau:
   ```bash
   eas login
   ```

3. **Cấu hình dự án**: Đảm bảo rằng bạn đã cấu hình dự án của mình để sử dụng EAS. Bạn cần tạo tệp `eas.json` trong thư mục gốc của dự án với nội dung như sau:
   ```json
   {
     "build": {
       "preview": {
         "android": {
           "buildType": "apk"
         }
       }
     }
   }
   ```

4. **Chạy lệnh build**: Sau khi đã cấu hình xong, bạn có thể chạy lệnh build:
   ```bash
   eas build -p android --profile preview
   ```

*Bài tiếp theo [View, Text & Styles](session_03_view.md)*
