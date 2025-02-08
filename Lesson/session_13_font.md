# Sử dụng font chữ 

Sử dụng font chữ tùy chỉnh trong một dự án Expo rất đơn giản. Expo cung cấp một thư viện tích hợp sẵn gọi là `expo-font`, giúp bạn dễ dàng tải và sử dụng các font chữ tùy chỉnh trong ứng dụng của mình. Dưới đây là hướng dẫn chi tiết:

### 1. Cài đặt Thư viện `expo-font`

Nếu bạn đang sử dụng một dự án Expo mới hoặc hiện có, bạn cần cài đặt thư viện `expo-font` (nếu chưa cài đặt):

```bash
npx expo install expo-font
npx expo install expo-font expo-splash-screen
```

### 2. Chuẩn bị Font Chữ

Tải xuống các file font chữ ở định dạng `.ttf` hoặc `.otf` và đặt chúng vào một thư mục `assets/fonts` trong thư mục gốc của dự án. Ví dụ:

```
MyExpoProject/
  ├── assets/
  │   └── fonts/
  │       └── MyCustomFont.ttf
  ├── App.js
  └── ...
```

### 3. Khởi tạo font chữ trong dự án

```javascript
// App.tsx
import { View } from 'react-native';
import HomeScreen from './components/review/Home';
import DetailScreen from './components/review/Detail';
import AboutScreen from './components/review/About';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

const App = () => {
    const [loaded, error] = useFonts({
        'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
          SplashScreen.hideAsync();
        }
    }, [loaded, error]);
    
    if (!loaded && !error) {
        return null;
    }

    return (
        <View>
            <HomeScreen />
            <DetailScreen />
            <AboutScreen />
        </View>
    )
}

export default App;
```

### 4. Sử dụng font chữ

```ts
// conponents/review/Detail.tsx
import { StyleSheet, View, Text } from 'react-native';

const DetailScreen = () => {
    return (
        <View>
            <Text style={ styles.review }>Detail Screen</Text>
        </View>
    )
}

export default DetailScreen;

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: 'OpenSans',
    }
})
```

*Bài tiếp theo [Sử dụng Font](session_13_font.md)*
