# Giới Thiệu Navigation

### Cài đặt React navigation

```
npm install @react-navigation/native @react-navigation/native-stack
```

Nếu bạn đang sử dụng với expo thì cài thêm thư viện

```
npx expo install react-native-screens react-native-safe-area-context
```

### Sửa trang App.tsx

```ts
// App.tsx
import HomeScreen from './components/review/Home';
import DetailScreen from './components/review/Detail';
import AboutScreen from './components/review/About';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { OPENSANTS_REGULAR } from './assets/utils/const';

import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

    const RootStack = createNativeStackNavigator({
        initialRouteName: 'Home',
        screens: {
            Home: {
                screen: HomeScreen,
                options: {
                    title: 'Overview',
                },
            },
            Detail: DetailScreen,
            About: AboutScreen,
        },
    });

    const Navigation = createStaticNavigation(RootStack);

    return <Navigation />;

    
}

export default App;
```

### Sửa component Home

```ts
// components/review/Home.tsx
import { Button, View, Text } from 'react-native';

const HomeScreen = () => {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title='View Detail' 
                onPress={() => { alert('Detail') }}
            />
        </View>
    )
}

export default HomeScreen;
```

*Bài tiếp theo [Giới Thiệu Navigation](session_15_navigation.md)*
