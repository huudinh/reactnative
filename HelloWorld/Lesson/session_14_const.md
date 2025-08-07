# Sử dụng hằng số

### Khai báo hằng số

Khai báo hằng số trong React Native (hoặc bất kỳ ngôn ngữ lập trình nào) mang lại nhiều lợi ích, bao gồm:

1. **Dễ Dàng Bảo Trì**:
   - Khi bạn sử dụng hằng số, bạn chỉ cần thay đổi giá trị của hằng số tại một nơi duy nhất nếu cần cập nhật, thay vì phải tìm kiếm và thay đổi nhiều lần trong mã nguồn.

2. **Tăng Độ Rõ Ràng và Đọc Hiểu**:
   - Sử dụng hằng số giúp mã nguồn của bạn rõ ràng hơn, bởi vì tên của hằng số có thể mô tả ý nghĩa của giá trị nó lưu trữ. Điều này giúp người đọc mã nguồn hiểu rõ hơn về mục đích của giá trị đó.

3. **Ngăn Chặn Lỗi Do Sửa Đổi**:
   - Hằng số không thể thay đổi giá trị sau khi được khai báo. Điều này giúp ngăn chặn lỗi do việc vô tình thay đổi giá trị của nó ở những phần khác nhau trong mã nguồn.

4. **Tính Nhất Quán**:
   - Khi sử dụng cùng một giá trị tại nhiều nơi trong mã nguồn, việc sử dụng hằng số đảm bảo rằng giá trị đó luôn nhất quán.

5. **Hiệu Suất**:
   - Hằng số có thể cải thiện hiệu suất vì giá trị của chúng không thay đổi, giúp trình biên dịch hoặc trình thông dịch tối ưu hóa mã nguồn tốt hơn.

### Ví dụ:
Khai báo hằng số trong React Native có thể như sau:

```ts
// utils/const.ts
import { StyleSheet } from "react-native"; 

export const OPENSANTS_REGULAR = 'OpenSans-Regular';

export const globalStyles = StyleSheet.create({
    globalFont: {
        fontFamily: OPENSANTS_REGULAR,
    }
})
```

### Sử dụng hằng số

```javascript
// App.tsx

import { View } from 'react-native';
import HomeScreen from './components/review/Home';
import DetailScreen from './components/review/Detail';
import AboutScreen from './components/review/About';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { OPENSANTS_REGULAR } from './assets/utils/const';

SplashScreen.preventAutoHideAsync();

const App = () => {
    const [loaded, error] = useFonts({
        [OPENSANTS_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
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

```ts
// components/review/Detail.tsx
import { StyleSheet, View, Text } from 'react-native';
import { OPENSANTS_REGULAR } from '../../assets/utils/const';

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
        fontFamily: OPENSANTS_REGULAR,
    }
})
```

### Kết hợp globalStyles và style theo component

```ts
// components/review/about.tsx
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../../assets/utils/const';

const AboutScreen = () => {
    return (
        <View>
            <Text style={[styles.about, globalStyles.globalFont]}>About Screen</Text>
        </View>
    )
}

export default AboutScreen;

const styles = StyleSheet.create({
    about: {
        fontSize: 30,
    }
})
```


*Bài tiếp theo [Giới Thiệu Navigation](session_15_navigation.md)*
