# Routes

Tài liệu: https://reactnavigation.org/docs/params

### Sửa Trang Home

- Chỉnh sửa CSS

- Xóa nút chuyển vào trang chi tiết 

- Click trực tiếp vào phần tử đi đến trang chi tiết

```jsx
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';

interface IReview{
    id: number;
    title: string;
    star: number;
}

const styles = StyleSheet.create({
    reviewItem: {
        padding: 15,
        backgroundColor: "#ccc",
        margin: 15,

    }
})

const HomeScreen = () => {
    const navigation:NavigationProp<RootStackParamList> = useNavigation();
    const [reviews, setReviews] = useState<IReview[]>([
        {id: 1, title: 'React Native', star: 5},
        {id: 2, title: 'Javascript', star: 5},
    ]);

    return (
        <View>
            <Text style={{ fontSize:30 }} >Review list</Text>

            <View>
                <FlatList 
                    data={reviews}
                    keyExtractor={(item) => item.id + ""}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Detail', item)}
                            >
                                <View style={styles.reviewItem}>
                                    <Text>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default HomeScreen;
```

### Sửa type

```ts
type RootStackParamList = {
    Home: undefined;
    Detail: {id: number; title: string; star: number} | undefined;
    About: undefined;
}

```

### Sửa trang Detail

- Sửa Style

- Lấy dữ liệu từ trang chủ sử dụng routes https://reactnavigation.org/docs/use-route

``` jsx
import { StyleSheet, View, Text, Button } from 'react-native';
import { OPENSANTS_REGULAR } from '../../assets/utils/const';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSANTS_REGULAR,
    },
    reviewText: {
        fontSize: 25,
        fontFamily: OPENSANTS_REGULAR,
    }
})

const DetailScreen = () => {
    const navigation:NavigationProp<RootStackParamList> = useNavigation();
    const route: RouteProp<RootStackParamList, 'Detail'> = useRoute();

    return (
        <View>
            <Text style={ styles.reviewText }>Id: {route.params?.id}</Text>
            <Text style={ styles.reviewText }>Tiêu đề: {route.params?.title}</Text>
            <Text style={ styles.reviewText }>Ratting: {route.params?.star}</Text>
            <Button title='Go Home' 
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default DetailScreen;

```

### Sửa trang App

- Sửa tiêu đề cho trang chi tiết

``` jsx
Detail: {
    screen: DetailScreen,
    options: {
        title: 'Chi tiết',
    },
},
```

```jsx
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
                    title: 'Trang chủ',
                },
            },
            Detail: {
                screen: DetailScreen,
                options: {
                    title: 'Chi tiết',
                },
            },
            About: AboutScreen,
        },
    });

    const Navigation = createStaticNavigation(RootStack);

    return <Navigation />;

    
}

export default App;
```

*Bài tiếp theo [Drawer Navigator](session_18_drawer.md)*