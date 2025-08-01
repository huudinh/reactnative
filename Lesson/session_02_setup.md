# Tạo ứng dụng Hello World

### Tạo dự án "Hello World"

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

### Ghi chú

Để chạy ứng dụng Native ta cần chuẩn bị


1. Đăng ký tài khoản expo https://expo.dev

2. Cài đặt Android Studio https://developer.android.com/

Việc cài đặt chủ yếu sử dụng để tạo máy ảo

3. Lỗi khi chạy máy ảo

```
Failed to resolve the Android SDK path. Default install location not found: C:\Users\xxx_ten_user\AppData\Local\Android\Sdk. Use ANDROID_HOME to set the Android SDK location.
```

Xóa các thư mục sau:

```
C:\Users\<User>\.android
C:\Users\<User>\.gradle
C:\Users\<User>\AppData\Roaming\Google\AndroidStudio*
C:\Users\<User>\AppData\Local\Google\AndroidStudio*
```

Cẩn thận: sẽ mất project history, config, v.v...


*Bài tiếp theo [View, Text & Styles](session_03_view.md)*
