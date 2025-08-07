# Moving Between Screens
### Khai báo type

```ts
// type/route.d.ts
type RootStackParamList = {
    Home: undefined;
    Detail: undefined; // Nếu màn hình chi tiết nhận tham số, bạn có thể định nghĩa kiểu tại đây
    About: undefined;
}
```

### Sử dụng type

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
    const RootStack = createNativeStackNavigator<RootStackParamList>({
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

### Chuyển đến trang Detail từ màn hình Home

```ts
import { Button, View, Text } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation:NavigationProp<RootStackParamList> = useNavigation();

    return (
        <View>
            <Text>Home Screen</Text>
            <Button title='View Detail' 
                onPress={() => navigation.navigate('Detail')}
            />
        </View>
    )
}

export default HomeScreen;
```

### Chuyển đến trang About từ màn hình Detail

```ts
import { StyleSheet, View, Text, Button } from 'react-native';
import { OPENSANTS_REGULAR } from '../../assets/utils/const';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const DetailScreen = () => {
    const navigation:NavigationProp<RootStackParamList> = useNavigation();

    return (
        <View>
            <Text style={ styles.review }>Detail Screen</Text>
            <Button title='Go About' 
                onPress={() => navigation.navigate('About')}
            />
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

*Bài tiếp theo [Routes](session_17_routes.md)*